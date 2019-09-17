---
layout: post
title:  "Sum of Positive"
subtitle: "A Programmers Mind Decoded"
date:   2018-07-05 13:45:44 -0500
categories: challenge
background: '/img/posts/bg-default.jpg'
---

As a CodeWars beta member, I just completed training on the "Sum of positive" kata. <a href="www.codewars.com/r/driA8A">Take the initiation</a> to join me and start training too!

 If you are a member already <a href="http://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript">click here</a> to train on "Sum of positive".

# Training Language

- JavaScript


# Description

An array of numbers is passed into a function. The return is the sum of all of the positive numbers. If there is nothing to add, the default sum is set to zero ( 0 ). 
Example [1, -4, 7, 12] => 1 + 7 + 12 = 20 

# Decomposition:

Break the problem down into small, manageable steps. Why? Because a few smaller problems are easier to solve than one huge one. Once each small step is taken care of, before you know it, the big task is complete.

1. Set the initial value of the sum to zero (0).
2. Collect the first element in the array
    - if the value is greater than 0
        - add the value to the sum
        - move on to the next element
    - if the value is less than 0
        - move on to the next element
3. Repeat step 2 until all elements have been evaluated


# Abstraction: 

Cut the clutter. Determine what is absolutely necessary to solve the problem.

- Input of numbers
- Output of sum


# Pattern recognition:

Developers love DRY code. DRY meaning Don't Repeat Yourself. Is there any step that is being repeated? These usually lead to great functions or loops.

- Determine if a value is positive or negative
- Add positive integers to the sum


# Pseudocode

    SET  VARIABLE sum TO default 0   
    LOOP input array 
      IF array element IS > 0 
        ADD array element value TO sum value 
    END LOOP 
    RETURN sum value 

# My Final Solution

    function positiveSum(arr) {
      for(var i = 0 , sum = 0 ; i < arr.length ; i++){
        if( arr[i] > 0 ){
          sum = sum + arr[i]
        }
      }    
      return sum;
    }

ALL TESTS PASSED! YAY!

# What did I learn?

So, whenever I complete a challenge, I look through others' solutions for anything I can improve upon. This time around, I learned there are 2 functions that complete the job, JavaScript filter() & reduce() functions. My solution could be completely rewritten WITHOUT a loop. I admit, I like the refactored version better, although both are great and get the job done.

## Refactored Solution
  
    function positiveSum (arr) {
      return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
    }

### filter()

JavaScript filter() returns an array containing all the array elements that pass a test given as a function. Some important things to note about filter():
- it will not execute on an empty array
- it does not change the original array.

So this step is where all the negative integers are removed and an array of only positive integers (if any) is returned.

For more information on JavaScript filter() function, check it out <a href='https://www.w3schools.com/jsref/jsref_filter.asp'>here</a> on W3 Schools.

### reduce()
JavaScripts reduce() function reduces an array to one value. It goes through each element of the attached array from left to right an executes the provided function on each. It returns an accumulator which is just fancy for a result or total. An important thing to note about reduce():
- it does not execute on an empty array.

This is where the positive elements in the array returned by the filter() function are added together.

For more information on JavaScript reduce() function, check it out <a href='https://www.w3schools.com/jsref/jsref_reduce.asp'>here</a> on W3 Schools.