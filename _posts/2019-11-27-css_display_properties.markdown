---
layout: post
title:  "Display Properties"
date:   2019-11-27 17:40:00 -0500
categories: tech
background: '/img/posts/bg-default.jpg'
---

# Display Properties

Understanding the different display property values will be fundamental in building the layout of any webpage or application.

## `display: none;`

![Display None]({{ site.baseurl }}/img/posts/display-none.jpg){:.center-img}

What does it do? It removes an element from flow of the document.
It may seem like it doesn't do much, but it is a powerful tool when partnered with JavaScript to create the toggle affect.
This can be easily confused with the CSS property `visibility` when it's set to `hidden`. However, these are quite different. 

Setting an elements visibility to hidden simply hides the content of that element but there will still be a big block of whitespace with enough room for the content that’s hiding. (Talk about hiding in plain sight.)

 Setting the display to none, completely removes the element from the flow of the page as if it never existed. Everything under that element is shifted up to take up the space of that now missing element. 

## `display: inline;`

![Display Inline]({{ site.baseurl }}/img/posts/display-inline.jpg){:.center-img}

Some familiar inline HTML elements by default are:
- `<a>` the anchor tag
- `<span>` to highlight certain content
- `<img>` for images
- `<input>` for fields on forms

These come off as the shy elements that get in where they fit in, not trying to disrupt the flow of what’s going on around them. These elements follow one rule: only take up as much space as the content within. Attempting to change the width and/or height of the element will have no affect. 

## `display: block;`

These are the pushy kids. Every Block HTML elements creates a new line regardless of if it could have fit on the line above and forget about any other element fitting next to it. Block elements take up the entire line on the web page. A block element will always be happy to nest fellow block elements. They are nice enough to take inline elements in their borders.  But you will never catch them seeking shelter within an inline element. 

![Display Inline]({{ site.baseurl }}/img/posts/display-block.jpg){:.center-img}

Some example of our natural pushy elements include:
- `<p>` paragraphs
- `<header>` typically placed at the top of the page holding the navigation and logo
- `<footer>` at the bottom of the page holding the copyright info and another possible navigation
- `<ol>` `<ul>` & `<li>` for our lists
- `<table>`

## `display: inline-block;`

![Display Inline]({{ site.baseurl }}/img/posts/display-inline-block.jpg){:.center-img}

These are our hybrid elements that take the good from both sides. From their inline heritage, they inherit the ability to sit next to each other. The block side of their bloodline grants them the ability to adjust the width and height properties. 

Similar to clothes drying on a clothesline, each piece has it's own height and width but exists on the same line as the other pieces.

### Resources
- [MDN: Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [W3Schools display: inline-block](https://www.w3schools.com/Css/css_inline-block.asp)