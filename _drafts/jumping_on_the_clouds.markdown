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



## Abstraction

> What is Absolutely Needed


## Pattern Recognition

> Possible Functions


## Pseudocode

```javascript
if c[i + 1] = 0
    count + 1
Else count + 2

```

## My Solution

```javascript

```

> So what is happening here?