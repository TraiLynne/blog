---
layout: post
title:  "Find the Middle Element"
subtitle: "A Programmers Mind Decoded"
date:   2018-07-11 13:45:44 -0500
category: challenge
---

As a codewars beta member I just completed training on the "Find the middle element" kata. <a href="www.codewars.com/r/driA8A">Take the initiation</a> to join me and start training too!
 If you are a member already <a href="http://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript">click here</a> to train on "Find the middle element".

# Training Language
- JavaScript
- Ruby

# Description:
A function that accepts an input of a triplet of integers and returns the index of the elements whose value falls in the middle. The input to the function will be an array of three ( 3 ) distinct numbers.

# Decomposition:
Break the problem down into manageable steps. Smaller problems are easier to solve than one huge one. Once each small step is solved, before you know it, the big one is too.

1. Determine which of the three ( 3 ) elements in the given array falls in the middle based on the value
2. Determine the index of the middle value in relation to the original array

# Abstraction: 
Determine what is absolutely necessary to solve the problem. Cut the clutter. Clean, elegant code is the goal.

- An input of an array with three ( 3 ) distinct numbers

# Pattern recognition:
Is there any step that is being repeated? These usually lead to great functions or loops. Developers love DRY code. DRY meaning Don't Repeat Yourself. So the DRYer the code, the better.

- N/A

# Pseudocode
	
	FUNCTION gimme
		INPUT triplet array
		SORT triplet array  AS sorted array
		SET middle AS sorted array INDEX 1
		RETURN INDEX OF triplet array with the same value of middle
	END FUNCTION

# Final Code
## JavaScript

	var gimme = function (inputArray) {
  		function sortedCopy(array) { 
    			return array.concat().sort(function(a, b){ return a - b });
  		}  
        var sortedArray = sortedCopy(inputArray);
        return inputArray.indexOf(sortedArray[1]);
	};

## Ruby 

	def gimme(input_array)
 		 input_array.index(input_array.sort[1])
	end

# What did I learn?

## JavaScript:

Originally, I wanted to use the simple .sort function, however, there are two ( 2 ) major problems that I would need to iron out. 

First, the .sort method works way better with letters than numbers. When wanting to sort words, it's as simple as ABC for JavaScript. When it comes to numbers, the values are sorted in the same way - in a sense. Let's say we gave JavaScript the integers 25, 5, 123 and 112. They will be sorted as they would appear in the encyclopedia instead of on the number line. Weird to try to describe out loud so here: your brain would normally say the sorted version is 5, 25, 112, 123 right? Well, JavaScript says 112, 123, 25, 5. Why? Well because the 1s come before the 2 and 5. Get it?

Ok, moving on. My 2nd problem is I would literally lose the original array. When .sort is called on an array, it reconstructs the original array instead of making a copy and just giving me a new one. My output would always be the index of 1 and I do not want that.

In order to get past these hiccups, I created my own sort function.  Within my function, I create a copy of the original array that I can alter to my liking using the .concat function. It usually is used to join 2 arrays and output a new array of what is combined. I just added my one array and got my copy. I then used the good ol' .sort function with a little tweak so it can work better with numbers. I did not come up with this tweak on my own, it is a well-known fix to the sort function for sorting numbers. 

I realize that I could have made this function with just one line:

	inputArray.indexOf(inputArray.concat().sort(function(a, b) { return a - b })[1])

I decided I like my version better. If this were a bigger program,  sortedCopy could be called multiple times without having to write it out many times. Because it creates a function that can be called multiple times in the future if needed.

## Ruby

With Ruby, the .sort function outputs a new array without adjusting the original array. I simply sorted the array and located the index of the element within the original array that holds the same value as the middle element of the sorted array. 

Since I did not have to create a new function or any special tricks, I created one clean line that gets straight to the output.