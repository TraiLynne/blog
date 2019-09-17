---
layout: post
title:  "S&J Architects"
subtitle: "User Interface Project"
date:   2019-02-06 17:53:44 -0500
category: project
tags: [html, css, less, javascript]
---

I was given the task to build a custom marketing page for an architectural firm named Smith and Jones Architects as a school project. The projects minimum viable product (MVP) included building the layout and designing a multipage site. We had just covered HTML, CSS/LESS, and JavaScript in school. Now, it was time to prove my skills.
    
The focus of this project was to exercise my ability to build a website from scratch using assets, content, and instructions. 

### This project highlights mastery in:
- User Interface
- Responsive Design
- using Web Tools and Frameworks
- Applied JavaScript. 

### Links
- <a href='https://github.com/TraiLynne/User-Interface-Project' target='_blank'>Github</a>
- <a href='http://trailynne.org/User-Interface-Project/' target='_blank'>Live Demo</a>

![Web Pages]({{ "../img/ui-project/IMG_0047.JPG" | absolute_url }})



# Overview

With any type of marketing page, you want the user to be able to view the page on any platform from desktop to a mobile phone. With this in mind, the S&J Architects was designed to be responsive from the very beginning. The project scales based on the size of the screen of the device. With the use of media queries, I was able to get the layout of the page to be pixel-perfect.

The design of the project takes the user experience into account. Since there is a lot of information provided about the company, displaying it all at once would require A LOT of scrolling. Nobody wants to be overloaded. The services page came predesigned with the tabs & cards. Targeting specific topics and seeing the details right below will focus the user's attention. I think the carousel is a nice touch for the properties that appear on the landing page.

# The Journey
### Preparation
	
The first step I take in any major project is to set up my Trello board in order to organize my thoughts and tasks. I used the standard lists: To Do, In Progress, Done, and Backlog. 
	
In order to prepare for the task, I broke down the design files that were provided. I deduced similar aspects such as the layout of the pages, the header, the footer, etc. I knew I wanted to group these similar pieces in my code in order to keep it DRY.
	
From here I set up my file structure in order to start coding. Within the root directory, there are a few sub-directories with the names `components`, `css`, `less`, `img` and `js` that hold their corresponding files. 
### Basic HTML & Structure

While writing HTML and setting up the structure of a page, I attempt to make code that is reusable as possible.

After inspecting the design files provided, I noticed the similarities for each page layout.  The header and footers are all the same as well as the main structure of each page. Each page has a hero area and an area for the main content.
	
### Static CSS using LESS

![Responsive Design]({{ "../img/ui-project/IMG_0043.JPG" | absolute_url }})

For this project, I took advantage of the LESS preprocessor. In the past, I had globally installed LESS as well as the `less-watch-compiler` globally to my system. 

In order to get the LESS preprocessor up and running, I `cd` into my projects root directory. Within the root directory, I ran the command `less-watch-compiler less css index.less`.
    
first thing I added to the `index.less` file would be the CSS reset. I wanted to use a blank slate to get the proper end result.

The general styles of the page were completed within the main `index.less` file. Things like background color or the overall font family. From here, each component received it’s own LESS file housed within its subfolder.  These files were then imported into the main LESS file. I decided to organize the code like this so I could use those component files in future projects where I may need a carousel or tabbed card system. 

### JavaScript

![Image Carousel]({{ "../img/ui-project/IMG_0048.JPG" | absolute_url }})

I was inflexible about having an infinite loop for the carousel. A `Carousel` class and a `CarouselCard` class were created to complete the task. The Carousel itself handles the heavy-lifting. It handles the order of the cards and the click handling. The `CarouselCard`s are really just for presentational purposes.

The Header and Navigation system are still being improved. I admit I am not a master of GreenSock, but I love how smooth and clean the transitions are for the platform. The navigation successfully opens and closes like a drawer. The only thing I want to change is how the navigation items appear. I’d like it better if the drawer transitioned as a whole. Currently, the menu items to shift around on each transition.

The Hero area is my favorite area on each page. Most likely because it took the most time in the CSS stage. Or it could be the professional tone that it sets off. It’s such a simple, subtle animation over a picture that sets off a professional tone for the page. I used GreenSock to get this animation up and running.

![Tabbed Cards]({{ "../img/ui-project/IMG_0050.JPG" | absolute_url }})

The tabbed card logic was split by Link and Card. Every `TabLink` is attached to a corresponding `TabCard`. The `TabLink` handles the click handling.  When a tab is clicked, all the cards are checked for the `.active-tab` CSS class. Once there are no cards shown, the tab's card is then given the `.active-tab` class and displayed on the screen.

### Looking Ahead ...

I am proud of this project! My web development skills were pushed to the next level. However, I see a few tweaks for the near future. The assignment has a few stretch goals I want to complete. These changes extend the website with a couple pages for 'About Us' and 'Projects'. Most of the updates I have are centered around transitions. I want to clean up the navigation drawer as I mentioned above. My goal is to have the drawer items to transition without the extra shifting. I also want to smoother transitions on the carousel and tabbed cards. The current version is bland. 

Thank you so much for checking out this project. There are many more surprises and projects on the horizon. Stay tuned. 

~Trai Lynne;


## Resources
- <a href='http://lesscss.org/' taget='_blank'>LESS</a>
- <a href='https://www.javascript.com/' target='_blank'>JavaScript</a>
- <a href='https://greensock.com/' target='_blank'>GreenSock</a>