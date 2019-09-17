---
layout: post
title:  "ForgetMeNot"
subtitle: "Project"
date:   2017-04-24 16:20:00 -0400
category: project
---

## The Idea
The instructions for Sinatra CRUD app were to create a custom app used to track something important to me. Since I do not collect anything in particular, I asked a few of my friends and family members for ideas. These app subjects included books, cars, movies, and CDs. While these were all great ideas for an app, I knew I would never continue to use and improve the app in the future because after I passed the assessment, I just wouldn't care anymore. None of the ideas were important to me personally. This is not to say I won't build those apps in the near future for those particular individuals, however, I needed to find something I wanted to keep track of. An idea that I would continue to work on even after the assessment.

Suddenly, an epiphany! I realized my family seems to be forever growing. Although I have not provided any of my own additions, the number of nieces and nephews I have continues to rise. (I have made my family aware they need to rest for a second so I can catch up). I love all my babies and I never want to be the auntie who forgot a birthday. I decided I wanted to build an app that would track birthdays for children and their parents. ForgetMeNot was born. 

## Web Development Workbook

Whenever I begin a project, the very first step I take is to jot down any ideas in my notebook. This helps me to declutter my mind and organize my thoughts on paper. 

I start by defining the objective of my project. I ask myself what is the overall purpose of my project. I decided I will build an app that keeps tracks of family members and their birthdays, all while keeping the family together. It would end up being a family tree mixed with a birthday countdown app. While I still have a ways to go before the app is everything I would like it to be, at least I had a vision of my final project, a goal to work towards. Right now, I just needed to get the database started and properly insert individuals and their birthdays. 

## Models and Migrations

When it comes to using the MVC file structure for a Sinatra app, I found the best way to go about building my app is to build the models and migrations first. In the end, I came up with 3 models: User, Adult and Child.

The UserClass holds the logic for setting up an individuals account on the app. Each user would be required to have a username, e-mail address and a password. The password, of course, would be secure by using the BCrypt Gem. Each user would have many adults and many children.


    # ./app/models/user.rb
    class User < ActiveRecord::Base
      has_many :adults
      has_many :children

      validates_presence_of :username, :email, :password

      has_secure_password
    end


The AdultClass and ChildClass have a few things in common. Each would hold a first name and last name for organization purposes. Since this is an app used to track birthdays, each child and adult would need a minimum of the month and date of their birthday. I also wanted to keep the URL path clean so a Slugifiable Module was created and added to the adult and child classes.


    # ./app/models/concerns/slugifiable.rb
    module Slugifiable
      module InstanceMethods
        def slug
          "#{self.last_name.downcase}-#{self.first_name.downcase}"
        end
      end

      module ClassMethods
        def find_by_slug(slug)
          self.all.find{ |instance| instance.slug == slug }
        end
      end
    end


The AdultClass also has the ability to attach an anniversary to the instance created, however it is does not need to hold value since nobody is required to get married in their life. An adult belongs to a user and can have many children. The ChildClass belongs to a user. The tricky part occurred when I realized a child can have many parents. I grew up in a single parent house hold, however a child may end up having a mom, dad, or even step parents. This required a new class and a JOINs table.


    # ./app/models/adult.rb
    class Adult < ActiveRecord::Base
      belongs_to :user
      has_many :adult_children
      has_many :children, through: :adult_children

      extend Slugifiable::ClassMethods
      include Slugifiable::InstanceMethods
    end

    # ./app/models/child.rb
    class Child < ActiveRecord::Base
      belongs_to :user
      has_many :adult_children
      has_many :adults, through: :adult_children

      extend Slugifiable::ClassMethods
      include Slugifiable::InstanceMethods
    end


The AdultChildClass would simply hold 2 items per record, the adult id and the child id. An AdultClass would have many children through AdultChild and the ChildClass would have many adults through AdultChild. 


    # ./app/models/adult_child.rb
    class AdultChild < ActiveRecord::Base
      belongs_to :child
      belongs_to :adult
    end


Once I created the models, the migrations came easily:


    class CreateUsers < ActiveRecord::Migration
      def change
        create_table :users do |t|
          t.string :username
          t.string :email
          t.string :password_digest
        end
      end
    end
    
    class CreateAdults < ActiveRecord::Migration
      def change
        create_table :adults do |t|
          t.string :first_name
          t.string :last_name
          t.string :birth_date
          t.integer :birth_year
          t.string :anni_date
          t.integer :anni_year
          t.integer :user_id
        end
      end
    end
    
    class CreateChildren < ActiveRecord::Migration
      def change
        create_table :children do |t|
          t.string :first_name
          t.string :last_name
          t.string :birth_date
          t.integer :birth_year
          t.integer :user_id
        end
      end
    end
    
    class CreateAdultChildren < ActiveRecord::Migration
      def change
        create_table :adult_children do |t|
          t.integer :adult_id
          t.integer :child_id
        end
      end
    end


## Views and Controllers

After building the models and migrations, I went on to build the views and controllers. True to the idea of separation of concerns, my views folder was separated into 3 sub folders matching the 3 main models of the app. I also created a controller file for each model to inherit from the main ApplicationController. I found it easiest to build the view and controller action at the same time. 

### Application Contoller

My ApplicationController inherits from Sinatra::Base. Within the controller, I enabled sessions and set my session secret. I also defined my HelperMethods to determine if a user is logged in and exactly who the current user is based on their unique id.


    class ApplicationController < Sinatra::Base

      configure do
        set :public_folder, 'public'
        set :views, 'app/views'
        enable :sessions
        set :session_secret, "trailynne"
      end

      get '/' do
        if logged_in?
          redirect to '/users/home'
        else
          erb :index
        end
      end

      helpers do
        def logged_in?
          !!session[:user_id]
        end

        def current_user
          User.find(session[:user_id])
        end
      end

    end


### User Views and Controller Actions

The user sub folder only needed 3 view files: the sign up page, the login page, and the home page for a user. These forms were simple to create since an instance of the UserClass only holds attributes for a username, e-mail address and password.

I created a simple controller action to render the sign up form to the client if an existing user account is not already logged in:


    # ./app/controllers/user_controller.rb
    get '/signup' do
        if !logged_in?
          erb :'users/create_user'
        else
          redirect to '/users/home'
        end
      end
      

After this, I created a form with 3 inputs to accept the clients information:


    # ./app/views/users/create_user.erb
    <form method="POST" action="/signup">
      <p>
        <label for="username">Username:</label>
        <input id="username" type="text" name="username" requried/>
      </p>

      <p>
        <label for="email">E-Mail Address:</label>
        <input id="email" type="email" name="email" requried/>
      </p>

      <p>
        <label for="password">Password:</label>
        <input id="password" type="password" name="password" requried/>
      </p>

      <input type="submit" value="Create Account"/>
    </form>


From here, I created a POST controller action to take the input from the form and turn the information into a new record in the database. If any information was blank, the client would be redirected back to the sign up form. However, if the information was successfully filled out, a new instance of the UserClass would be created and saved to the database. At the same time, the user would be logged in and greeted by the homepage. By setting the :user_id key in the session hash to the new users id, the client would be successfully logged in.


    # ./app/controllers/user_controller.rb
    post '/signup' do
        if params[:username] == "" || params[:email] == "" || params[:password] == ""
          redirect to '/signup'
        else
          user = User.create(username:params[:username], email: params[:email], password:params[:password])
          session[:user_id] = user.id

          redirect to '/users/home'
        end
      end
      

The next controller action I created would be used to render the log in page to the client. The form loaded to the screen would only include 2 input fields for the username and password if the client is not already logged in. Once the information is filled in and submitted, a POST controller action would locate the user, authenticate their password and set the :user_id key in the session hash to the users id before redirecting to the users home page. If the clients input was not able to be validated, the client would be redirected to the signup form.


    # ./app/controllers/user_controller.rb
    post '/login' do
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          redirect "/users/home"
        else
          redirect to '/signup'
        end
      end


The last 2 controller actions created in the user controller would be used to render the users home page and log out of the app. To logout, all that needs to happen is clearing the sessions hash. Since a client is considered logged in by the presence of a :user_id key per my helper method in the ApplicationController, clearing the hash will remove the :user_id key. Once the key is gone, the client can only access the login or signup pages. Any other page requested by the client will automatically redirect to the log in view.


    # ./app/controllers/user_controller.rb
    get '/users/home' do
        if logged_in?
          erb :'users/show'
        else
          redirect to '/login'
        end
      end
      
    get '/logout' do
        if logged_in?
          session.destroy
          redirect to '/login'
        else
          redirect to '/'
        end
      end


### Adult Views and Controller Actions

When I learned how to build a complex form that would be able to create 2 objects of different classes at once and associate the 2 instances through the controller action, I was hooked! Those are now my favorite forms and controller actions to build. I started with the AdultClass because of the additional anniversary attribute. 

The first view and controller actions I built for the class dealt with creating a new adult. I wanted the client to be able to create a new adult and add a child to the adult by creating a child or checking boxes of existing children. The one rule I made sure to follow is that the client is only able to see the adults and children that belong to their user account. They are not able to see the full database. 

I built the controller action to render the view only if the client  is already logged in. Actually, almost all of my controller actions follow this rule.  


    # ./app/controllers/adults_controller.rb
    get '/adults/new' do
        if logged_in?
          @children = current_user.children
          erb :'adults/new'
        else
          redirect to '/login'
        end
      end


From here, I went on to build my crazy complex form. There were multiple input fields for creating a new instance of an adult as well as a new child if needed. The only input tags that are required are the first and last name with the month and day of their birth for a new adult and the optional child. All other input fields are optional. From here a POST controller action was built to create a new adult and add the record to the database. The adult would also be associated with the user account. If a child was created, the child would be associated with the adult by adding the child to the adults children array.


    # ./app/views/adults/new.erb
    <form method="POST" action="/adults">
      <h2> Adult's Details:</h2>

        <p>
          <label for="first_name">First Name:</label>
          <input id="first_name" type="text" name="adult[first_name]" requried/>
        </p>

        <p>
          <label for="last_name">Last Name:</label>
          <input id="last_name" type="text" name="adult[last_name]" requried/>
        </p>

        <p>
          <label>Birthday:</label>
          <input type="text" name="adult[birth_date]" placeholder="Month & Day" requried/>
          <input type="text" name="adult[birth_year]" placeholder="Year"/>
        </p>

        <p>
          <label>Anniversary:</label>
          <input type="text" name="adult[anni_date]" placeholder="Month & Day"/>
          <input type="text" name="adult[anni_year]" placeholder="year"/>
        </p>

      <h2>Add Child(ren)</h2>
        <h4> Add a New Child:</h4>
        <p>
          <label for="child_f_name">First Name:</label>
          <input id="child_f_name" type="text" name="child[first_name]"/>
        </p>

        <p>
          <label for="child_l_name">Last Name:</label>
          <input id="child_l_name" type="text" name="child[last_name]"/>
        </p>

        <p>
          <label>Birthday:</label>
          <input type="text" name="child[birth_date]" placeholder="Month & Day"/>
          <input type="text" name="child[birth_year]" placeholder="Year"/>
        </p>

        <h4>Or, choose an existing child:</h4>
          <% @children.each do |child| %>
            <input id="child_<%= child.id %>" type="checkbox" name="adult[child_ids][]" value="<%= child.id %>">
              <%= child.first_name %> <%= child.last_name %>
            </input>
            <br>
          <% end %>

      <input type="submit" value="Create Adult"/>
    </form>

    # ./app/controllers/adults_controller.rb
    post '/adults' do
        if params["adult"]["first_name"] == "" || params["adult"]["last_name"] == "" || params["adult"]["birth_date"] == ""
          redirect to '/adults/new'
        else
          adult = Adult.create(params[:adult])
          current_user.adults << adult

          if params["child"]["first_name"] != "" || params["child"]["last_name"] != "" || params["child"]["birth_date"] != ""
            adult.children << child = Child.create(params[:child])
            current_user.children << child
          end

          redirect to "/adults/#{adult.slug}"
        end
      end


Once the adult is created, the client would be redirected to the view page of the individual adult. This page would display the adults name, date of birth, anniversary (if one was added) and any associated children as links to the childs page. There would also be a link for editing or deleting the individual adult.


    # ./app/controllers/adults_controller.rb
    get '/adults/:slug' do
        if logged_in?
          @adult = Adult.find_by_slug(params[:slug])
          erb :'adults/show'
        else
          redirect to '/login'
        end
      end
      
    # ./app/views/adults/show.erb
    <a href="/adults">Back to Adults</a>
    <h1><%= @adult.first_name %> <%= @adult.last_name %> Details</h1>

    <a href="/adults/<%= @adult.id %>/edit">Edit</a>

    <h2>Birthday</h2>
    <p><%= @adult.birth_date %>, <%= @adult.birth_year %>

    <h2>Anniversary</h2>
    <p><%= @adult.anni_date %>, <%= @adult.anni_year %></p>

    <h2>Child(ren)</h2>
    <% @adult.children.each do |child| %>
      <p><a href="/children/<%= child.slug %>"><%= child.first_name %> <%= child.last_name %></a></p>
    <% end %>

    <form method="POST" action="/adults/<%= @adult.id %>/delete">
      <input type="hidden" name="_method" value="delete">
      <input type="submit" value="Delete"/>
    </form>


The edit form is not very different from the creation form. The edit form even allows the client to create a new child. The main difference between the forms is that all the information that exists is already filled in and associated children for the adult are already checked off. Any change made would be sent as a patch request. The matching controller action then updates the adults information in the database and creates the new child if the inforamtion was filled in. Once the changes are submitted, the client is redirected to the show page of the adult reflecting the updated information.


    # ./app/views/adults/edit.erb
    <form method="POST" action="/adults/<%= @adult.id %>">
      <input type="hidden" name="_method" value="patch"/>
      <h2> Adult's Details:</h2>

        <p>
          <label for="first_name">First Name:</label>
          <input id="first_name" type="text" name="adult[first_name]" value="<%= @adult.first_name %>" requried/>
        </p>

        <p>
          <label for="last_name">Last Name:</label>
          <input id="last_name" type="text" name="adult[last_name]" value="<%= @adult.last_name %>" requried/>
        </p>

        <p>
          <label>Birthday:</label>
          <input type="text" name="adult[birth_date]" placeholder="Month & Day" value="<%= @adult.birth_date %>" requried/>
          <input type="text" name="adult[birth_year]" placeholder="Year" value="<%= @adult.birth_year %>"/>
        </p>

        <p>
          <label>Anniversary:</label>
          <input type="text" name="adult[anni_date]" placeholder="Month & Day" value="<%= @adult.anni_date %>"/>
          <input type="text" name="adult[anni_year]" placeholder="year" value="<%= @adult.anni_year %>"/>
        </p>

      <h2>Add Child(ren)</h2>
        <h4> Add a New Child:</h4>
        <p>
          <label for="child_f_name">First Name:</label>
          <input id="child_f_name" type="text" name="child[first_name]"/>
        </p>

        <p>
          <label for="child_l_name">Last Name:</label>
          <input id="child_l_name" type="text" name="child[last_name]"/>
        </p>

        <p>
          <label>Birthday:</label>
          <input type="text" name="child[birth_date]" placeholder="Month & Day"/>
          <input type="text" name="child[birth_year]" placeholder="Year"/>
        </p>

        <h4>Or, choose an existing child:</h4>
          <% @children.each do |child| %>
            <input id="child_<%= child.id %>" type="checkbox" name="adult[child_ids][]" value="<%= child.id %>" <%= 'checked' if @adult.children.include?(child) %>>
              <%= child.first_name %> <%= child.last_name %>
            </input>
            <br>
          <% end %>

      <input type="submit" value="Save Changes"/>
    </form>

    # ./app/controllers/adults_controller.rb
    patch '/adults/:id' do
        adult = Adult.find_by_id(params[:id])

        if params["adult"]["first_name"] == "" || params["adult"]["last_name"] == "" || params["adult"]["birth_date"] == ""
          redirect to "/adults/#{adult.id}/edit"
        else
          adult.update(params[:adult])

          if params["child"]["first_name"] != "" || params["child"]["last_name"] != "" || params["child"]["birth_date"] != ""
            adult.children << child = Child.create(params[:child])
            current_user.children << child
          end

          redirect to "/adults/#{adult.slug}"
        end
      end


If the adult was deleted, the client is redirected to the adults index view page.


    delete '/adults/:id/delete' do
        adult = Adult.find_by_id(params[:id])

        adult.delete

        redirect to '/adults'
      end
      

At the very top of each individual adults page, there is a link called "Back to Adults". This leads to the Adults Index View page as well. Within this view file, I passed the users adults array as an instance variable from the controller and iterated through the array to display each adult in order of last name. Each name is displayed as a link to the individual adult's show page. 


    # ./app/controllers/adults_controller.rb
    get '/adults' do
        if logged_in?
          @adults = current_user.adults.sort_by{|a| a.slug}
          erb :'adults/index'
        else
          redirect to '/login'
        end
      end

    <h1>All Adults</h1>

    <ul>
      <% @adults.each do |adult| %>
        <li><a href="/adults/<%= adult.slug %>"><%= adult.last_name %>, <%= adult.first_name %></a></li>
      <% end %>
    </ul>


Finally, the adults were done with every CRUD action fulfilled.


### Child Views and Controller Actions

So, I am officially a Web Developer because I actually thought about being lazy about the child CRUD actions. I could have just copied and pasted all the adult forms and controller actions then replace all the adult words with the world child or children. Then delete anything dealing with the anniversary input. I thought about this for a very short period of time

However, because I absolutely enjoy building the forms, I coded everything manually. Plus, practice makes perfect right? I felt this was a win-win situation. I won't bore you with the details as it is almost exactly like the adult views and controller actions. The child creation and edit form also provided the option to create a new adult and associate the new adult with the child just as the adults forms do.  

### Almost there

After I believed I was done with all my views and controllers, it was time to test out my application. Throughout building the app, I was constantly using the Shotgun Gem to test out what everything looked like and make sure the controller actions rendered the correct views and created class instances as predicted. However, I knew the best way to find any mistakes would be letting someone else test out my app. I ran the Shotgun Gem and had my father create an account and add an adult and child to the database. I also had him navigate throughout the website as well as edit the adult and child. I asked him to logout of the app and log back in to ensure everything was saving properly. Lastly, I had him delete an adult and child. 

S U C C E S S ! ! ! !

My app was working just as I expected and now we wait for review. This is just the beginning however so keep checking in.

## Bloopers

- Order Matters: When creating my config.ru file, I placed my AdultController, ChildController, and UserController above Rack::MethodOverride. This caused me to have to put my patch and delete requests in my ApplicationController. It took me a good hour to figure out why and I knew I did not want to clutter up my ApplicationController. Separation of concerns and organization is the goal here. Once I changed the order, viola, everything worked as it should.
- I realized I spelled required wrong in my forms while spell checking my blog. Yay dyslexia !! Easy update.
    
    
## More to come
- I think I am going to move the delete button into the edit page instead of having it on the show page.
- I also want a feature that shows the age of the adult or child if the year is entered 
- Eventually an alert will go off if it is someones birthday
