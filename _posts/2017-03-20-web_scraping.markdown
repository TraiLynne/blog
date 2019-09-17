---
layout: post
title:  "Web Scraping"
date:   2017-03-20 18:04:07 +0000
categories: tech
background: '/img/posts/bg-default.jpg'
---

Web scraping is used to extract data from a website. 

A very respected rule between programmers is that we are lazy. That means that any way we can find to make writing code easier will be put to use. We have variables to hold pieces of information that can be called at a later time. We use methods that can be called to enact a specific behavior of our program over and over without needing to rewrite each line of code. But what can be better than code that writes and updates itself?

Here’s a good example: Let’s say I wanted to have the top news story at the time I run my program to always show up. The top news story will constantly be changing. Instead of having to go in my program and update the story every few hours (which would be completely against a programmer's oath to laziness), I can have my program “borrow” the story from an actual website that is always being updated with the newest story. Scraping is done by looking through a web pages HTML and following the right HTML tag classes and IDs wrapped around the information I want on my program. Once I collect the right path, any updates made to that area will also automatically update to my program as well.

In order to scrape a website, it requires attention to detail. An HTML file can be very cumbersome with information and if the right path is not followed to get the information needed, the program may end up being a mess. However, when scraping is done correctly, the results are truly amazing and makes writing code a whole lot easier.
