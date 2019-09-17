---
layout: post
title:  "Story of My Life"
subtitle: "Part 2"
date:   2017-07-22 18:31:54 -0400
category: project
---


For the Rails App with a jQuery Front End project, the instructions were to extend the functionality of my Rails project. I was asked to add dynamic features using jQuery and JSON.

## Rendering Index Page
My Rails application only had one index template for chapters, so it was pretty easy to decide which models index would be rendered using jQuery and JSON. 

Previously, when the user logged in, they would be presented with the homepage. On the homepage, underneath the random quote generated, was an unordered list containing two links for creating a new story and viewing the current stories created by the logged in user. When the user clicked either link, they would be led to a completely different screen. Upon learning jQuery, I saw how pointless this actually was.

Now, when the user clicks the link to view their current stories, the homepage will display this list of books in place of the link. I used an Ajax request to GET the index page of books. Upon a successful response, the link is replaced with the list of the books displayed as links to each book show template.

```
# welcome/home.html.erb

<div id='bookshelf'>
      <a href='/books' class='link'>View Bookshelf</a>
</div>


# welcome.js

$(function(){
    $('#bookshelf .link').on('click', function(e) {
        $.get(this.href).success(function(resp){
            $('#bookshelf').html(resp);
        });
        e.preventDefault();
    });
});
```

## Rendering New Creation
I decided that I would render a newly created entry under the form using jQuery instead of being automatically directed to the entry's show page. 

In order to make this happen, I added a div right under the form of the New template to hold the information created. Using jQuery, the default action of form submission is halted. In normal circumstances, pressing submit on the form would automatically send a direct to a new page. Instead, the data entered into the forms is serialized and a request is made to the Create controller action. The controller actions render the JSON information and present the browser with a 201 status. The 201 tells the browser that everything is ok and the new entry was created. Once the browser knows everything is ok, the JSON presented in the response fills in the empty div under the form.

```
# entries.js

$('form').submit(function(event) {
		event.preventDefault();
			
		var values = $(this).serialize();
		var entry = $.post('/entries', values);
			
		entry.done(function(resp) {
			$('#entryMood').text(resp["mood"]);
			$('#entryContent').text(resp["content"]);
		});
});

# entries_controller.rb

def create
    @entry = Entry.new(entry_params)

    if @entry.valid?
      @entry.save

      render json: @entry, status: 201
    else
      render :new
    end
end

# entries/new.html.erb

<%= form_for(@entry) do |f| %>
  <% if @entry.errors.any? %>
    <div id="error_explanation">
      <h2>
        <%= pluralize(@entry.errors.count, "error") %> prohibited the creation of this Important Date:
      </h2>

      <ul>
        <% @entry.errors.full_messages.each do |m| %>
          <li><%= m %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <%= f.hidden_field :page_id %>

  <div class="field">
    <%= f.label :mood %>
    <%= f.text_field :mood %>
  </div>

  <div class="field">
    <%= f.label :content %>
    <%= f.text_area :content %>
  </div>

  <div class="action">
    <%= f.submit %>
  </div>
<% end %>

<div id='entry-results'>
  <h4 id='entryMood'></h4>
  <p id='entryContent'></p>
</div>

```

## Rendering Show Page
As far as rendering a show page using jQuery, I decided to continue using the EntryModel. I added a 'Prev' and 'Next' button to the Show template so a user can go between entries without going through a bunch of hoops. Each button received a class in order to easily add an event listener. 

JQuery was then used to attach an event listener to make an ajax request once either button was clicked. A variable is first created containing the id collected from the attribute 'data-id' and added or subtracted by 1, depending on which direction the user navigates through the entries. 

After collecting and increasing the id, an ajax request is made to the specified entry's JSON page (/entries/:id.json). Instead of going to an entirely new page, the JSON from the response is parsed and replaces the entry data that was previously. All while staying on the same page. This creates a dynamic experience for the user and a more friendly navigation.

However, I am still a little tripped up behind this method. I'm still trying to figure out how the user can navigate through the entries when the IDs will not always be in numerical order... 

```
# entries/show.html.erb

<a href="#" class="js-prev" data-id="<%=@entry.id%>">Prev</a>
<a href="#" class="js-next" data-id="<%=@entry.id%>">Next</a>

# entries.js

$(".js-next").on("click", function() {
		var nextId = parseInt($(".js-next").attr("data-id")) + 1;
		$.get("/entries/" + nextId + ".json", function(resp) {
			$(".entryTime").text(resp["time"]);
			$(".entryMood").text(resp["mood"]);
			$(".entryContent").text(resp["content"]);
			
			$(".js-next").attr("data-id", resp["id"]);
		});

});
	
$(".js-prev").on("click", function() {
		var lastId = parseInt($(".js-prev").attr("data-id")) - 1;
		$.get("/entries/" + lastId + ".json", function(resp) {
			$(".entryTime").text(resp["time"]);
			$(".entryMood").text(resp["mood"]);
			$(".entryContent").text(resp["content"]);
			
			$(".js-prev").attr("data-id", resp["id"]);
		});

});
```

## Relationships shown in JSON

Books have many chapters. A book also has many pages through chapters. In order to show this relationship, I used the Active Model Serializer gem to create serializers for books, chapters, pages, and entries. I honestly created them for important dates and entries as well just in case I need them a future. 

Within the serializer files, I added each model's attributes as well as their relationship with each other. This allows the JSON when rendered in the browser, to show the many chapters and pages for a book and the book that each page or chapter belongs to. 

```
# book_serializer.rb

class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :quote
  
  has_many :chapters
  has_many :pages
end

# chapter_serializer.rb

class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :title, :main_focus
  
  belongs_to :book
  
  has_many :pages
  has_many :important_dates
end

# page_serializer.rb

class PageSerializer < ActiveModel::Serializer
  attributes :id, :page_number, :date, :quote, :thank_you, :lesson_learned
  
  belongs_to :chapter
  
  has_many :entries
  has_many :tasks
end

```

### Well, that's all ... for now.

I am far from complete with this project. I am going to continue to build on. This is one project I don't think I will ever be completely done with. I am always willing to accept contributions and suggestions. Check out the repo [here](https://github.com/TraiLYNNE/story-of-my-life-js-version).
