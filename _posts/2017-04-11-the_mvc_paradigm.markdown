---
layout: post
title:  "The MVC Paradigm"
subtitle: Models, Views, Controllers, Oh My!
date:   2017-04-11 09:10:40 -0400
categories: tech
background: '/img/posts/bg-default.jpg'
---


I have been learning Ruby for a while now and in the back of my head I have been wondering when I will be seeing HTML and CSS in my life again. To be a Full Stack Web Developer, I understand I will need to know HTML, CSS, and a few programming languages in order to build the Web Applications I have been dreaming up in my head. I have been diving deep into Ruby for a few months and have been trying my best to figure out how everything comes together as one phenomenal site. The MVC Model used by the Sinatra Framework has made the picture a lot clearer. 

One trait of a web developer that constantly draws me in is the need for organization and clearly defining duties in code. MVC takes this concept to heart by splitting assignments into 3 categories – Models, Views, and Controllers. 

## Models

I consider Models to be 'the mind' of the operation.  Any file held within the models directory defines a class that usually pertains to a specific component of the application. The files contain code for creating, manipulating and/or saving data, communicating with the database, assigning data to attributes, collecting data via scraping, etc.  The code held within the Models directory will be that of a programming language such as Ruby.

## Views

I consider views to be 'the mouth' of the operation because these files are in charge of putting on the show. Any file held in the Views directory will affect the content seen by the client. This is where I house my old friends HTML, CSS, and JavaScript.   
Although the HTML, CSS, and Ruby code all live within the same directory, they have yet to meet or talk to each other. The final group pulls everything together - 

## Controllers

Last, and most certainly not least, we have 'the muscle' of the operation. Controllers do all the heavy lifting and running around.  Any class that is considered a controller comes with the responsibility of receiving and processing requests from the client and sending the response. When the client wants to see a specific page by typing in a URL, this initiates a request to the server. That request is sent to the controller. If the request is valid, the controller will run the appropriate code from Models and find the appropriate content from Views. Once all the correct information has been processed, the response is then sent back to the client as the beautifully designed Facebook, Twitter, Napster, or YouTube. This all happens in the blink of an eye (depending on your internet connection). 

After learning about MVC, it was as if a little light went off in my head. Well more than that, it was a full "OMG I get it !!" reaction. I am finally beginning to understand how everything works together. Boy oh boy, my excitement and hunger for learning grows each and everyday I continue on this journey. I have had days of discouragement, days I felt like this just does not make sense. I am proud of myself for committing and continuing on. MVC helped me realize that everything I am learning is gradually piecing together into the Full Stack experience, but this is only the beginning.
