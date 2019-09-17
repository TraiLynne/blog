---
layout: post
title: "Interactive Clock"
subtitle: "Sample Project"
date: 2018-07-11 17:53:44 -0500
categories: project
tags: [javascript, ruby]
background: "/img/posts/bg-default.jpg"
---

This interactive clock is a fun project for all ages! With fun photos and messages, this clock can be customized to fit any style.

![Project ScreenShot]({{ site.baseurl }}/img/interactive-clock.JPG){:.center-img}

# Language(s)

- HTML
- CSS
- JavaScript

# Links

- <a href='https://github.com/TraiLynne/clock-project'>GitHub</a>
- <a href='https://codepen.io/TraiLynne/full/PBwgym/'>CodePen</a>

Visually, this looks like a fairly simple project right? Wrong! Under the hood, there is a lot is going on.

# HTML/CSS

The visual aspects of the page were pretty easy to handle. Basic HTML elements were used for the most part such as a header, image, and a few paragraph tags.

In order to decide a time for "Wake Up", "Lunch", and "Nap", the 'select' tag was used and the options provided are hour intervals. When clicked, the 'select' tag creates a drop-down list of the options that can be picked. The times are split into hour intervals.

A 'button' element is used to create the "Party Time" option. This button is used to toggle an override of the picture and message shown when it's time to have fun.

Initially, placeholders are used for the time, image and message that is displayed. JavaScript is used to customize the placeholders.

# JavaScript

JavaScript is where the interactivity occurs. There's a lot going on but I will keep the focus on the major jobs that JavaScript is accomplishing in this project.

First off, we have the updateClock function that is used for the real fun. It is a huge sentence basically telling my program if this happens, then do that or else if something else happens, do something else. It is an easy way to tell the clock what message and image to display based on the hour of the day.

    var updateClock = function() {
        // IF/ELSE statement controls photo and message displayed
        if (time == partyTime) {
            messageText = "Let's Get this Party Started!";
            imageSource = "...";
        } else if (time == napTime) {
            messageText = "Let's get some sleep";
            imageSource = "...";
         } else if (time == lunchTime) {
             messageText = "It's Lunch Time!!";
             imageSource = "....";
        } else if (time == wakeupTime) {
            messageText = "Wake up and make it happen.";
            imageSource = "...";
        } else if (time < noon) {
            messageText = "Good Morning!";
            imageSource = "...";
        } else if (time > evening) {
            messageText = "Good Evening!";
            imageSource = "...";
        } else {
            messageText = "Good Day!";
            imageSource = "...";
        }
    }

Next, I wanted the time of day to be displayed in real time in normal language. When displaying the time with JavaScript, it displays military language. Don't get me wrong, I actually use military time a lot, but not everyone has it memorized or likes to do the math. Instead, i used JavaScript to do the math for me. I also used the setInterval function to update the clock every second. It keeps the user from having to press refresh repeatedly.

    var showCurrentTime = function() {
        // display the string on the webpage
        var clock = document.getElementById("clock");
        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours
        if (hours >= noon) {
          meridian = "PM";
        }

        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };

    setInterval(updateClock, oneSecond);

Lastly, is the Party Time Button. JavaScript is used to change multiple elements on the page when the Party TIme button is pressed. Some things you notice that change are the picture and message displayed as well as the button itself. Did you notice that it switches between "Party Time" and "Party Over"?

    //- Changes Button upon Pressing
    var partyEvent = function() {
        if (isPartyTime === false) {
            isPartyTime = true;
            time = partyTime;
            partyTimeButton.innerText = "Party Over";
            partyTimeButton.style.backgroundColor = "#0A8DAB";
        } else {
            isPartyTime = false;
            time = new Date().getHours();
            partyTimeButton.innerText = "PARTY TIME!";
            partyTimeButton.style.backgroundColor = "#222";
        }
    };

From there, it's all about having JavaScript listen for the right event so the page can be updated correctly. A few even listeners added were any changes made to the time selectors for waking up, lunch, and nap time. We also needed it to watch out for that Party Time button to be clicked.

Ta-Da !! The interactive clock is ready for action.
