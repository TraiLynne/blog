---
layout: post
title:  "Sock Merchant Challenge"
subtitle: "A Programmers Mind Decoded"
date:   2019-08-10 10:16:44 -0500
categories: challenge
background: '/img/posts/bg-default.jpg'
---

## Language: JavaScript

# The Problem

Let’s say we work at a clothing store and just received a truckload of different color socks. There may be matching socks in the batch, but none of them have been paired up. We have been asked to determine how many pairs of socks can be made to sell.

We can always go through the tedious task of sorting through the socks and figuring out how many pairs there are by hand, but we are programmers. Let’s try this with code.

Thankfully, the delivery company was kind enough to hand us some valuable information that details how many socks come in the bundle and what the color of each sock is in an unsorted list. We want to create an algorithm that takes in this information and returns the number of matching pairs.

# My Approach

To accomplish this, let’s approach this at a human level first. How would we go about solving this problem without code? 

I would start by sorting all the socks by color. Group by group, I would create all the matching pairs possible and add the amount to my total number of pairs.

I wear mismatched socks so any socks that don’t match up still make a pair. However, for the sock-matchers out there, we will not count mismatched pairs in our total. 

Another option would be to count the number of socks in each group, divide that number by 2 and round it down to a whole number if necessary.

## Break this down into steps
1. Sort the Socks by color
2. Count the number of socks in a group
3. Divide that number by 2 (and round it down to a whole number if necessary)
4. Add this number to the total number of pairs
5. Move on to the next group of socks and repeat steps 2 - 4 until all groups have been counted
6. Return the total number of pairs

So this makes sense at a human level, how can we convey these same instructions to a computer? Well, one great thing about the information we are given is the list of colors is given in an array.

Arrays are special variables that can hold more than one piece of information at a time. Arrays have exceptional talents if we call on their built-in methods. A method is like a verb, an action that an array can carry out. A very useful method we can use in this instance is the .sort() method. We can also iterate through an array element by element and perform actions on each item using a loop.

My original Pseudocode for the problem is as follows:

    START FUNC Sock_Merchant
        SORT array
        
        WHILE array length > 0:
            Compare first 2 values:
                IF values match:
                    add 1 to total pairs
                DROP first 2 elements

Aforementioned made perfect sense in my mind. First, we sort the array. Then, we compare the first two values. If the values match, we add 1 to our total number of pairs. Lastly, we drop the items. We repeat these steps until the entire array is empty. It is time to code.

# My Solution

    function sockMerchant(n, ar) {
        let sorted = ar.sort((a, b)=> a - b);
        let pairs = 0;

        while (ar.length > 0) {
            sorted[0] === sorted[1] ? pairs++ : pairs;

            sorted.splice(0,2)  
        }
        return pairs;
    }

My original solution did just what I intended for it to do. When I tested my code against the sample tests, everything passed. I submitted my code. Three tests failed. Now, how did that happen?

## Debugging

Well,  I experimented on the solution with manual input. I even did the work with pencil and paper to try to figure this out. What was going on? I did some snooping on the hidden tests by using my experience points to unlock the code. Line by line, I went through my solution. Sorting worked fine, comparing worked fine, then the answer jumped out to me. When I was comparing elements, I would drop them both. I found my bug. Let's break this down a little further.

    function sockMerchant(n, ar) {
        ar.sort((a, b) => a - b);
        let pairs = 0;

        while (ar.length > 0) {
            if (ar[0] !== ar[1]) {
                ar.shift()
            } else {
                pairs++;
                ar.splice(0,2)
            }
        }
        return pairs;
    }

My refactored solution still take the first two items and compare them.   If the first item does not match the second item, we only drop the first item. If they match, we release both and add one to our total pairs. Picture holding a sock in each hand. You visually compare the two. If they match, you pair them up. If not, you let go of one and pick up the next. 

Fingers crossed, let's submit.
All the tests pass with flying colors!


## Another Approach

    function sockMerchant(n, ar) {
        const colors = {};
        let pairs = 0;

        for(var i = 0; i < n; i++){
            if (colors[ar[i]] === undefined) {
                colors[ar[i]] = 0
            }

            colors[ar[i]] += 1
        }

        for(var c in colors) {
            pairs += Math.floor(colors[c] / 2);
        }

        return pairs;

    }

We can utilize an object to perform the task as well. Similar to the human-level approach we discussed earlier. In this approach, we can create an object to hold different colors as keys. The value of each key is the number of socks matching the color. We go through each element on the array and determine if there is a key that matches the color. If there is not a key, a key is created and set to a value of 0. We increase the value by one. We iterate through the array until we evaluate all the elements. After this, we go through each key in our Colors object and operate on its value. The value is divided by two and rounded down to a whole number then added to the total number of pairs. Once all the calculating is complete, we return the total number of pairs.

# Wrap Up

Tasks we complete daily without a second thought are algorithms. Any time we follow a set of instructions, we are performing an algorithm. Approaching a problem from a human standpoint first is the easiest way for me to translate them to a computer.

Although code may look amazing and pass a few tests, it may not get the whole job done. Intricate testing can show any bugs and edge cases that may occur. Debugging and testing are essential skills needed to ensure we write the best possible algorithm.

Never forget, there is more than one approach to solving a problem. Keeping your mind open to different ways to solve a problem is key to programming. Never feel you are backed into a corner to solve a problem. If you can think it, you can program it.

My journey is far from over. There is so much more to come. I’m excited to continue and will use my blog to keep me accountable.

Want to strengthen your skills as well? Check out <a href='https://www.hackerrank.com' target='_blank'>HackerRank</a> to get in your practice. I am currently completing the Interview Preparation Kit. 