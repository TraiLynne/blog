---
layout: post
title:  "Counting Valleys Challenge"
subtitle: "A Programmers Mind Decoded"
date:   2020-01-12 17:30:44 -0500
categories: challenge
background: '/img/posts/bg-default.jpg'
---

> Language(s): JavaScript

Success! I solved Counting Valleys on [HackerRank](https://www.hackerrank.com/). Can you complete the [challenge](https://www.hackerrank.com/challenges/counting-valleys/)?

## Description

> Function Description

Complete the `countingValleys` function. It must return an integer that denotes the number of valleys Gary traversed.

> Parameter(s)

`countingValleys` has the following parameter(s):

`n`: the number of steps Gary takes

`s`: a string describing his path

> Constraints

- `n` will be between or equal to 2 and 10^6
- `s` will consist of the letters U or D

> Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

> Sample Input

`8, UDDDUDUU`

> Sample Output

`1`

## Decomposition

> Break It Down

1. Start at level 0
2. Determine the direction of the next step
3. Add or Subtract based on level
4. Confirm if the previous status was above or bellow sea level
    - if above, add 1 to valleys
    - if below, valley number does not change
5. After full traversal, return number of valleys

## Abstraction

> What is Absolutely Needed

- The steps string
- Valley Counter
- Valley status

## Pattern Recognition

> Possible Functions

- Determine level
- Compare previous level status and update as needed

## Pseudocode

```javascript
function valleyCounter(n, s){
  steps = s.split
  v = 0
  currentLevel = 0
  inValley = false
  
  steps.forEach( s -> {
      calculateLevel()
      determineValley()
  }
  
  return v;
end
```

```javascript
calculateLevel(s){
    if s = U
      currentLevel += 1
    else
      currentLevel -=1
}
```

```javascript
determineValley(currentLevel, v, inValley) {
    if (currentLevel < 0 && inValley = false)
      v += 1
      inValley = true
    if (currentLevel >= 0 && inValley = true)
      inValley = false
}
```

## My Solution

```javascript
function countingValleys(n, s) {
    let valleyCount = 0;
    let steps = s.split("");
    let currentLevel = 0;
    let inValley = false;

    steps.forEach(s => {
        if(s === "U"){
            currentLevel += 1;
        } else {
            currentLevel -= 1;
        }

        if(currentLevel < 0 && inValley === false){
            valleyCount += 1;
            inValley = true;
        } else if(currentLevel >= 0 && inValley === true) {
            inValley = false;
        }
    });

    return valleyCount;
}
```

> So what is happening here?

1. We create a variable to keep track of the number of valleys Gary enters, his current sea level, and if he is in a valley or not.
2. There is also a variable for steps which is just the string of steps provided as an argument split up by individual letter in order to process each step one at a time.
3. For each step taken:
    - We determine if the level Gary is at goes up or down based on the letter on every step.
    - If the Current Level is less than 0 AND Gary is not currently in a valley status based on his last step, we increase the number of valleys by 1 and change Gary's status to in the valley.
    - On the other hand, if on Gary's current step, his level is above or equal to 0 AND his in Valley status is true based on his last step, we change his in valley status to false.
    - Any other combinations of Sea Level and Valley Status will not make any changes
4. Once all the steps have been evaluated, we return the number of valleys Gary entered.
