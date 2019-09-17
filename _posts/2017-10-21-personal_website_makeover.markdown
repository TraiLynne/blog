---
layout: post
title:  "Personal Website Makeover"
date:   2017-10-21 10:10:44 -0500
categories: [project, tech, personal]
background: '/img/posts/bg-default.jpg'
---
It’s been a while since I have posted. I have been trying to find a way to use my blog in a way that works best for me. I love having my own website, don’t get me wrong. However, my website was not accurately reflecting who I am. After spending a while deciding on how I can create a new portfolio website and racking my brain for a domain name to use, I realized I had already chosen the perfect domain for me. <a href='http://trailynne.org/'>TraiLynne.org</a> is mine and I decided I am going to build and design the page to truly reflect me.

My first mission was to change the landing page of the URL. I did not like the fact that the user is automatically taken to my blog when the website is pulled up. I wanted a homepage that showed who I am and what skills I have as well as ways to get in contact with me. All the things a web developers site should contain. The tricky part would be integrating this page into my blog without completely messing up accessing the blog or posts I had created. The landing page previously showed condensed forms of 5  blog posts that could be navigated through using ‘Older Posts’ and ‘Newer Posts’. Each post title was a link to the full blog post. I still wanted to use this idea, just did not want it to be the first thing I see on my site.

In order to ensure I did not jeopardize my blog completely, I created an entirely different GitHub repo for my new landing page. This way I could play around with the structure and styling of the page and not worry about interfering with the blog part at all. I went back to basics, using HTML and CSS. Whenever I make a simple site like this, I break down the buildup into 3 steps – structure, content, and style. 

The structure and content steps aren’t the most thrilling steps but are definitely the most necessary. I divided my landing page into 3 sections – header, main, and footer. The header area contains my beloved graffiti image of my name as well as the navigation of the site. The main area is further separated into 3 sections for information about me, the skills I have and how to get in touch with me.  Lastly, the footer contains my copyright. Once the structure is made and the content is added, the page looks super boring. However, technically, I do not need to do anything else to create a website. It may look like a plain old word document, but I have just built a website. 

Thankfully, I did not stop there. After I finished adding in the content of the site, I went on to the style. From the very beginning, I wanted to ensure my site could easily be accessed from a mobile device as well as a computer screen and look good. I wanted to keep the site neat and ensure my favorite colors were used – Red, Black, White, and Orange. I threw in some grey as well. I styled my site using the mobile first approach. This simply means that the site is initially created for a mobile device or small screen. As the screen gets larger, the elements start to move around. Instead of everything being stacked on top of each other, they are start sitting neatly side by side and the social media sites get labeled.

I decided to pause here and launch the site in order to get feedback from my friends and family members. This required tackling the most difficult part, integrating the new page into the already built blog. My blog was created using the Jekyll static site generator. Prior to deciding to change my landing page, I had never really dived into the code used to create my blog. After reading through the Jekyll documentation, a few google searches, and a lot of trial and error, I finally got the site to navigate exactly how I wanted. It was a lot simpler than I was making it be. Integrating the new landing page into the blog only took a few steps
<ul>
  <li>Create a new folder in the root folder named ‘blog’ and move the existing index.html page into the new folder</li>
  <li>Move the files I created for the new landing page into the root folder of the site</li>
  <li>Add one line of code to my <em>_config.yml file</em></li>
</ul>

```
paginate_path: "/blog/page:num/"
```

This additional line of code lets my site know that page numbers for posts are now accessed from <a href='http://trailynne.org/blog/'>TraiLynne.org/blog/</a> instead of just <a href='http://trailynne.org/'>TraiLynne.org</a>.

Done and done. 
Now my customized landing page is successfully integrated into my blog and I can still access all my blogs and the posts I create.

I sent my link to my friends and family members to receive feedback and critiques regarding the new landing page. So far I have received a lot of positive feedback and few critiques which lets me know I am heading in the right direction. I am going to work on:
<ul>
  <li>A professional picture instead of the selfie currently in place</li>
  <li>Adding JavaScript to create a more interactive site</li>
</ul>

I have also been coming up ways to utilize my blog more often moving forward.  I am planning on using the blog posts to also include projects I complete featuring photos, video walkthroughs and code snippets. I am also a fan of <a href='https://www.codewars.com/'>Code Wars</a> so I may include pseudocode, solutions and the explanations to the challenges I complete. There’s no point in having a blog if I’m not going to use it. 

Feel free to reach out and let me know what you think. I am always open to suggestions, ideas, feedback, and critiques. Or even just a chat. <a href='http://trailynne.org/'>TraiLynne.org</a> is a work in progress and not even close to being complete. I feel that with a personal portfolio site, the job will never truly be done.  As a web developer, I will be constantly learning and growing therefore my website will need to match this journey and evolution.

Now comes the hard part... taking a new picture. (I am not a fan of taking pictures)
