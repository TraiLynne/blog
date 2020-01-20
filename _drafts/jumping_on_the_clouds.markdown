---
layout: post
title:  "Jumping on the Clouds"
subtitle: "A Programmers Mind Decoded"
date:   2020-01-12 17:30:44 -0500
categories: challenge
background: '/img/posts/bg-default.jpg'
---

> Language(s): JavaScript

Success! I solved Jumping on the Clouds on [HackerRank](https://www.hackerrank.com/). Can you complete the [challenge](https://www.hackerrank.com/challenges/jumping-on-the-clouds/)?

## Description

> Function Description

The `jumpingOnClouds` function should return the minimum number of jumps required, as an integer.

> Parameter(s)

`jumpingOnClouds` has the following parameter(s):

`c`: an array of binary integers

> Input Format

The first line contains an integer , the total number of clouds. 
The second line contains space-separated binary integers describing clouds `c[i]` where `0 <= i < n`.

> Constraints

- `2 <= n <= 100`
- `c[i]` is either `0` or `1`
- `c[0] = c[n - 1] = 0`

> Output Format

Print the minimum number of jumps needed to win the game.

> Sample Input 1

`7, 0 0 1 0 0 1 0`

> Sample Output 1

`4`

> Sample Explanation 1

Emma must avoid `c[2]` and `c[5]`. She can win the game with a minimum of `4` jumps

> Sample Input 2

`6, 0 0 0 0 1 0`

> Sample Output 2

`3`

> Sample Explanation 2

The only thundercloud to avoid is c[4]. Emma can win the game in 3 jumps

## Decomposition

> Break It Down

1. Start at cloud 0
2. Determine if I can move 2 clouds ahead
    - Yes :: Move 2 clouds and add 1 jump
    - No :: Move 1 cloud and add 1 jump
3. Repeat until I reach the last cloud
4. Return the number of jumps taken

## Abstraction

> What is Absolutely Needed

- A way to track the current cloud
- A way to track the jumps taken


## Pattern Recognition

> Possible Functions or Loops

- Determine which cloud to jump to next
- Add to jump count

## Pseudocode

```javascript
jumps = 0
currentCloudIndex = 0

START LOOP
while currentCloudIndex is LESS THAN the LENGTH of CLOUDS
    if currentCloudIndex + 2 IS SAFE
        ADD 1 to JUMPS
        ADD 2 to the currentCloudIndex
    if currentCloudIndex + 2 IS NOT SAFE
        ADD 1 to JUMPS
        ADD 1 to the currentCloudIndex
END LOOP

RETURN JUMPS
```

## My Solution

```javascript
function jumpingOnClouds(c) {
    let jumps = 0;
    let currentCloud = 0;
    let end = c.length - 1;

    while(currentCloud < end){
        c[currentCloud + 2] === 1 ?
            currentCloud += 1
            :currentCloud += 2
            
        jumps += 1;
    }

    return jumps;
}
```

> So what is happening here?

1. We set our variables for jumps to 0. We also set the currentCloud to 0 because that is the index of the cloud we currently occupy.
2. There is also an optional variable called `end` which denotes the index of the very last cloud. We calculate this by taking the length of our `c` variable (the clouds array submitted as a parameter) and subtract 1 because arrays are 0-indexed. 
3. We begin our loop for determining which cloud to jump to stopping the loop once the `currentCloud` variable value is equal to the `end` variable value
4. On each iteration of the loop, we check to see if the `currentCloud` index plus 2 has a value of 1.
    - If yes, we add 1 to our `currentCloud` variable as it is only safe to move one cloud ahead
    - If not, we can safely move 2 clouds ahead, so we add 2 to the `currentCloud` tracker
5. Each iteration of the loop will add 1 to the jump value regardless of how many clouds ahead we move.
6. Once we have reached the final cloud, we exit our loop and return the number of jumps tallied. 
