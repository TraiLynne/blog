---
layout: post
title:  "Story of My Life"
subtitle: "Part 3"
date:   2017-07-30 20:33:23 -0400
categories: project
background: '/img/posts/bg-default.jpg'
---


In my last post, I mentioned how rendering the show page for my entries was not meeting my satisfaction. Incrementing the entry id by 1 each time was not going to work for my application's usage. 

Thanks to Cernan, a Learn instructor, we came up with a logical way to render my Entry Show template using Ruby, jQuery, and an AJAX requests.

## The New Route
The first decision was to create a new route and controller action brilliantly named 'next'. There was a slight dilemma of deciding if the route would be nested or not. Since each entry belonged to a page, there was no need to create such a long route. The Rails logic would take care of the page the entry belongs to.

```
## config/routes.rb

get '/entries/:id/next', to: 'entries#next'
```

## The Controller Action
The 'next' controller action would be placed in the EntriesController.  Within the EntriesController is a before_action that sets the @entry variable based on the value of the id key located in the params.

```
# app/controllers/entries_controller.rb

def set_entry
    @entry = Entry.find(params[:id])
end
```


The 'next' controller action would set a variable called next_entry equal to the product of @entry.next and render the next_entry using JSON to the view.

```
# app/controllers/entries_controller.rb

def next
    next_entry = @entry.next
    
    render json: next_entry
end
```

## The Method
This is where it started to get fun. The 'next' method called in the controller action is defined in the Entry model. Within the method, is a variable also named 'next_entry'. This variable is set equal to the first element in the array returned of entries with an id larger than the given entry that belongs to the same page. If there are no more entries belonging to the same page with a larger id, the entry displayed will be the first entry of the array of entries belonging to the same page. 

Personally, this is a mouthful and looks much prettier and simpler in code somehow.

```
# app/models/entry.rb

def next
    next_entry = self.page.entries.where("id > ?", id).first
    
    if next_entry
      next_entry
    else
      self.page.entries.first
    end  
end
```

## The JavaScript
Now that I had all the Ruby logic in place and working correctly, it was time to move on to the JavaScript using jQuery and an AJAX request. Avi always says make sure the code works without AJAX before adding it.

The code was almost the same as before and we added a twist. The assignment asked that the JSON response is translated into Javascript Model Objects and the Model Objects have at least one method on the prototype.

So in the entries JavaScript file, an event handler for the 'click' event was added to the 'Next' link on the Entry Show Template. After preventing the default action of the click, the id of the shown entry would be collected from a handy attribute named data-id located within the 'Next' link element. A GET request is made using AJAX to the route for the 'next' controller action using the id collected from the data-id attribute. The JSON response received from the GET request is then translated into a JavaScript Model Object named Entry. Within the Entry Object the following attributes are defined for the new entry: id, time, mood, and content. Attached to the Entry Objects prototype is a method named 'appendToDOM'. This method renders the new entries data to the show view, replacing the previous entries data without a page refresh. Last, but not least, the data-id attribute is updated to the current entry being shown in the view. Of course, all of this logic is wrapped in a document.ready jQuery function.

```
# app/assets/javascript/entries.js

function Entry(id, time, mood, content) {
		this.id = id;
		this.time = time;
		this.mood = mood;
		this.content = content;
}
	
Entry.prototype.appendToDOM = function() {
		$(".entryTime").text('Time: ' + this.time);
		$(".entryMood").text('Mood: ' + this.mood);
		$(".entryContent").text(this.content);
};

$(".js-next").on("click", function(e) {
		e.preventDefault();
		
		var id = parseInt($(".js-next").attr("data-id"));
		
		$.get("/entries/" + id + "/next", function(resp) {
			var entry = new Entry(resp.id, resp.time, resp.mood, resp.content);
			
			entry.appendToDOM();
			
			$(".js-next").attr("data-id", entry.id);
		});

});
```

## The Finale
As my nephew says "Ta Ta" !!!! Rendering the show page now meets my expectations and knocked out 3 project requirements. 

Thank you Cernan !!
