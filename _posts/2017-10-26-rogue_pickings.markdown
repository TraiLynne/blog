---
layout: post
title:  "Rogue Pickings"
subtitle: "Sample Front-End Project"
date:   2017-10-26 14:00:44 -0500
category: project
---

Rogue Pickings is a beautifully created static webpage with a layout and design that can be easily adjusted to fit the needs of any type of company.

<img src="http://i58.photobucket.com/albums/g244/TraiLYNNE/fullsite_zpsgjaguoiz.jpg" border="0" alt="Rogue Pickings Full photo fullsite_zpsgjaguoiz.jpg"/>

### Links
See the <a href="https://github.com/TraiLynne/rogue_pickings" target='_blank'>Rogue Pickings Repo</a> on GitHub.

See the Pen <a href="https://codepen.io/TraiLYNNE/full/wPvjez" target='_blank'>Rogue Pickings Pen</a> on CodePen.

##  Process
For a simple static website, I follow a three step process – structure, content, and style. The structure and content steps are the easiest, yet most unattractive steps. For me, the style step is always the most fun.

To start the project, I was provided a PSD file for the site via <a href='https://skillcrush.com/' target='_blank'>Skillcrush</a>. I also grab a copy of the <a href='https://html5boilerplate.com/' target='_blank'>HTML5 Boilerplate</a> files and load them into my root directory. I use Git and GitHub throughout the entire process saving and committing my work at appropriate times. 

Before adding any words, pictures, or other viewable content to my HTML file, I set up the structural tags. ‘Rogue Pickings’ is separated into three areas – Header, Main, and Footer. I further break down the structure as necessary based on the layout of the site. Once all the structural tags are in place, I begin adding in the content. For this project, the tags I use are paragraph tags, h1-h3 header tags, an image tag and a couple unordered lists. Lastly, I pull up the HTML file in Google Chrome to begin styling the site, refreshing the page throughout the process to make sure everything looks just right.

For this site, I set up my CSS file by listing out all the tags, classes, and IDs first - from the outside in and top to bottom - with each having its own curly brackets. This helped me to organize the CSS file based on sections. If any of the tags aren’t used, I simply erase the tag and curly braces from the file to avoid unnecessary clutter. 

### Header Area
<img src="http://i58.photobucket.com/albums/g244/TraiLYNNE/header_zpssztqozcm.jpg" border="0" alt="Rogue Pickings Header photo header_zpssztqozcm.jpg"/>

#### Structure & Content
The header area contains two levels of nested div tags. The first level is part of the full-width class. The second level contains two  div tags of the half-width class. The first half of the header contains the logo “Rogue Pickings”. The second half contains the nav tag which holds a unordered list to display the navigation. Since this is a one-page site, the navigation does not contain actual links. (On the plus side, this allows me to build on to the site and add new pages in the future)

#### Style
Overall, any div tags with the class of full-width are a total of 1200px wide throughout the page. The divs with half-width are 600px wide. There are also third-width divs each 400px wide used later in the main area of the page. The half-width and third-width divs are floated to the left so the information is displayed neatly sitting side by side on the page.

In the header area, all the words are transformed into uppercase letters. There is also a border at the bottom of full-width div that is a light green color used as a type of highlight throughout the page.

The h1 tag for the logo has an inline tag called span. This allowed me to make ‘Rogue’ the same light green color used for the border and keep ‘Pickings’ the basic black color. I added padding to the top and bottom of the H1 tag to keep it from being directly on the edge of the page. In order to get the measurement for any padding used throughout the page, I used the ruler tool in Photoshop.

The navigation took some trial and error. In order to make the navigation options sit side-by-side, I had them float to the right of the page. The words are changed to light green. To keep the words from being right next to each other, I added a small amount of padding to the left of each word.

I did have a little hiccup while styling the header. Although I specified that the border was at the bottom of the header, it kept ending up at the top of the page. Since the half-width divs were floated to the left, they were actually removed from the flow of the page. Basically, the header area was now empty in a way. To alleviate this issue, I used the overflow property and set it to auto.

### Main Area
<img src="http://i58.photobucket.com/albums/g244/TraiLYNNE/main_zps88sqgcdf.jpg" border="0" alt="Rogue Pickings Main photo main_zps88sqgcdf.jpg"/>

#### Structure & Content
The main area is separated into two section tags with IDs that are easy to remember: top and bottom. 

The top section has one nested div tag that is part of the full-width class. The div holds an image, a level two header, and a paragraph. 

The bottom section also holds a full-width div which is then separated into three nested divs of the third-width class. Each of the three divs has a third level header tag. The first of the three divs has the ID 'specials' and a unordered list of the day’s specials. The second div with the id of 'reviews' has a paragraph tag to highlight one review. The last div has the ID 'contact'. I used a paragraph tag to hold the address and contact number for the company. In order to get the contact information split into the lines I needed, I used break tags.

#### Style

The top section is pretty straightforward. I added a border to the bottom of the image using the same specifications as the border at the bottom of the header area. The h2 tag used for the headline is transformed into uppercase letters and changed to the light green color. I added a little bit of padding to the top of the headline in order to give the words some space from the bottom of the image. The paragraph includes an adjusted line height (the space between the top of one line to the top of the next line). I set the property a few pixels bigger than the font size in order to make the paragraph easier to read. 

The bottom section required more time since each third required its own special attention to display correctly. The full-width div in the bottom section includes a thin light grey border.  All of the H3 tags were transformed into uppercase letters. A small amount of padding was added to the top of the headers in order to keep them from being too close to the border. The specials div contains a unordered list. Typically, a list automatically comes with bullet points or numbers. I changed the list-style and padding properties off to remove the bullet points. Each list item is the signature light green color. I also added the same thin grey border to the left of the 'specials' and 'reviews div to easily see the different areas. The reviews and contact divs adds padding around header and paragraph tags to keep the words near the center of the div. The line height of the paragraph is also increased to improve readability.


### Footer Area
<img src="http://i58.photobucket.com/albums/g244/TraiLYNNE/footer_zpsc1cre5gg.jpg" border="0" alt="Rogue Pickings Footer photo footer_zpsc1cre5gg.jpg"/>

#### Structure & Content
The footer area is nested with one full-width class div. Within the div is a level two header tag. The word ‘fresh’ is surrounded by an inline span tag in order for the word to be styled differently than the rest of the sentence.

#### Style
The top of the footer area is bordered by the same thin grey line used for the bottom section of the main area. The H2 tag is aligned to the center with padding added to both the top and bottom of the sentence. All the words are transformed to uppercase. Once I focused in on the word ‘fresh’ held between the span tags, I transform the text to lower case and change the color from black to light green. The font defaults to Wisdom Script which is a downloaded OpenType Font (.otf) file held in the fonts folder of the root directory. Since not all computers are able to read the font file (including mine) I found a backup Google Font named Dancing Script which I linked to the HTML file. If all else fails, the cursive font is the last line of defense. 
