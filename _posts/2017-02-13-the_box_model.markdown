---
layout: post
title:  "The Box Model"
date:   2017-02-13 18:02:08 +0000
categories: tech
background: '/img/posts/bg-default.jpg'
---


Did you know that every single element on a web page is held within it's own personal box? From the headline to the paragraphs to the pictures posted, each has it's own personal box. An elements box is composed of 4 areas – content, padding, border, and margin. 

Most of us have moved at least once in our life. We had to deal with the tedious task of packing up our current home in order to easily relocate our possessions to our new home. Most of the time, we pack similar items together, bathroom stuff with bathroom stuff, bedroom with bedroom, kitchen, etc. This is how a site is also set up, similar items are grouped together in order to maintain organization. 

We are currently packing up the last room, the kitchen. In the kitchen, we have very fragile items. We can place them in a box and ship them out, however this would not be the most ideal move. We don't want our dishes to break before we have a chance to use them in the new house. Let's compare a box o dishes to an element bx on a website.

So let's begin by thinking of the dishes as the content. The dishes are the actual important part that we are concerned about and will be utilized by a user later. We place the dishes in the box, just as a headline is placed inside it's own box. Since we do not want the dishes to break, we place newspaper or bubble wrap around the dishes inside the box. This will keep the contents inside from being right on the side of the box. The newspaper/bubble wrap provides room around the content but inside the box just as with padding in a web element. Padding assist with the readability of the content on a web page, not so much with making sure the fragile contents don't break. 

Next we have the border, which is the actual box we used to put the dishes in. While the border is very obvious in our example, a brown cardboard box, this is not always the case on a web page. The border is what wraps around the content and padding however the border is usually invisible. A visible border is not required however the border is always there.

Lastly, we have the margin. The margin is the area outside the box. This is the space that separates one element box from the next so they do not bump into each other. 

So lets review:
* content = dishes
* padding = newspaper/bubble wrap around dishes
* border = cardboard box
* margin = area outside of the box

Now there is something very important to understand about the box model. The margin, border, and padding may either be added to the size of the element or included in the size of the element. This can be manipulated by the box-sizing property. If box sizing is set to border-box, any units of measurement added for padding, border, and margin will add to the actual size of the box. Lets say we set the width of the element to 200px. If we set the border is 1px and the padding and margin is set to 20px on the left and right sides, all these values are then added to the size of the element. Instead of just being 200px wide, the element is now 282px wide. On the other hand, if the box-sizing is set to content-box, the additional values will not increase the width of the box. The set width of 200px will remain 200px regardless of the added border, padding and margin widths. 
