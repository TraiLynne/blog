---
layout: post
title:  "Library Fine"
subtitle: "A Programmers Mind Decoded"
date:   2020-03-02 15:51:44 -0500
categories: challenge
background: '/img/posts/bg-default.jpg'
---

> Language(s): JavaScript

Success! I solved Library Fine on [HackerRank](https://www.hackerrank.com/). Can you complete the [challenge](https://www.hackerrank.com/challenges/library-fine/problem)?

The local library needs our help. They currently calculate fines manually, which takes up much needed time. They have asked that a function be created to calculate the fines with the return date and the expected date as the only information the librarian needs to input.  They have given us the following fee structure:

1. If the book is returned on or before the expected date, there is no fee to apply.
2. If the book is returned after the due date, but within the same month, apply a fee of 15 Hakkos per day late.
3. If the book is returned within the same year of the expected date, but not within the same month, apply a fee of 500 Hakkos per month late.
4. If the book is returned any year later than the expected year, apply a fixed fee of 10000 Hakkos, no exceptions.

## Description

> Function Description

Complete the libraryFine function. It must return an integer representing the fine due.

> Parameter(s)

`libraryFine` has the following parameter(s):

- `d1`, `m1`, `y1`: returned date day, month and year
- `d2`, `m2`, `y2`: due date day, month and year

> Input Format

The first line contains `3` space-separated integers `d1`, `m1`, `y1` denoting the respective _*day*_, _*month*_, and _*year*_ on which the book was returned.
The second line contains `3` space-separated integers `d2`, `m2`, `y2` denoting the respective *day*, *month*, and *year* on which the book was due to be returned.

> Constraints

- `1 <= d1,d2 <= 31`
- `1 <= m1,m2 <= 12`
- `1 <= y1,y2 <= 3000`
- It is guaranteed that the dates will be valid Gregorian calendar dates.

> Output Format

Print a single integer denoting the library fine for the book received as input.

> Sample Input

`9, 6, 2015, 9, 9, 2015`

> Sample Output

`45`

## Decomposition

> Break It Down

1. Compare dates, return vs. expected, to determine if it was on time or late
    - Is it late?
        - N - Apply no fee
        - Y - determine what fee to apply
2. Determine the fee
    - Same year return
        - Y - check next fee range
        - N - apply fixed fee tag and calculate fee
    - Same month return
        - Y - check next fee range
        - N - apply monthly fee tag and calculate fee
    - Returned after expected date but within month
        - Y - apply daily fee tag and calculate fee
        - N - something went wrong
3. Calculate fee
    - Based on tag
        - On time
            - Apply no fee and return 0
        - Daily
            - Return Number of days late times x 15
        - Monthly
            - Return number of months late x 500
        - Fixed
            - Return 10000

## Abstraction

> What is Absolutely Needed

- The expected date
- The return date
- A way to tag book as late or not
- A way to determine fee to apply
- A way to calculate fee

## Pattern Recognition

> Possible Functions

- Is it late
- Determine fee to apply
- Calculate fee

## My Original Solution

```javascript
// variables
const onTime = 'on time';
const dailyFee = 'daily';
const monthlyFee = 'monthly';
const fixedFee = 'fixed';
let feesToApply = [onTime, 0];

let isItLate = (d1, m1, y1, d2, m2, y2) => {
    return y1 < y2 ?
        false
        : (y1 > y2) ?
            true
            : (y1 == y2) && (m1 > m2) ?
                true
                : (m1 == m2) && (d1 > d2) ?
                    true
                    : false
}

let determineFee = (d1, m1, y1, d2, m2, y2) => {
    y1 > y2 ?
        feesToApply = [fixedFee, 0]
        : m1 > m2 ?
            feesToApply = [monthlyFee, (m1 - m2)]
            : d1 > d2 ?
                feesToApply = [dailyFee, (d1 - d2)]
                : feesToApply = 'is this right?'
}

let applyFee = feeArray => {
    switch(feeArray[0]) {
        case dailyFee:
            return 15 * feeArray[1];
        case monthlyFee:
            return 500 * feeArray[1];
        case fixedFee:
            return 10000;
        default:
            return 0;
    }
}

function libraryFineOriginal(d1, m1, y1, d2, m2, y2) {
    isItLate(d1, m1, y1, d2, m2, y2) ?
        determineFee(d1, m1, y1, d2, m2, y2)
        : feesToApply[0] = onTime;

    return applyFee(feesToApply);
}
```

> So what is happening here?
In my original solution, I follow my journal thinking step by step.

I created a function for determining if the book is late vs on time in my `isItLate` function. Once that has been determined, there is either an `onTime` tag placed or the dates are passed into another function that determines the fee schedule to apply.

Within the `determineFee` function, the dates are again compared pretty similar to the prior function. One of four tags is placed within the `feesToApply` array: `dailyFee`, `monthlyFee`, `fixedFee`, or `onTime`. If an `onTime` tag is still applied, something went wrong because no on time book should have been passed to this function.

This caught me up on some edge cases. There were some weird dates that kept getting through. I found out it was in my logic for the `isItLate` function. I got it resolved and fixed all the edge cases.

From here the `applyFee` function is called. This function calculates and returns the fee to apply based on the fee schedule tag.

![Code Sample - Original Solution]({{ site.baseurl }}/img/posts/libraryFineOriginalSolution.png){:.center-img}

In school, we went about solving code challenges using the 'Red, Green, Refactor` approach.

In the beginning, no tests are passing. Most of the time these failing tests come across in the color red.

In the 'Green' phase, we do whatever it takes to make that code pass. Thats what this solution can be compared to. It's cumbersome and has a lot of repetitiveness. Even looking at the picture version of the code, it's hard to know exactly what is going on.

That's when we head into the 'Refactor' phase.

## My Refactored Solution

```javascript
// Complete the libraryFine function below.

function libraryFine(d1, m1, y1, d2, m2, y2) {
    return y1 < y2 ?
        0
        : y1 > y2 ?
            10000
            : (y1 == y2) && (m1 > m2) ?
                500 * (m1 - m2)
                : (y1 == y2) && (m1 == m2) && (d1 > d2) ?
                    15 * (d1 - d2)
                    : 0

    // === *** OR *** === //

    // if (y1 < y2){
    //     return 0;
    // } else if (y1 > y2) {
    //     return 10000
    // } else if ((y1 == y2) && (m1 > m2)){
    //     return 500 * (m1 - m2);
    // } else if ((y1 == y2) && (m1 == m2) && (d1 > d2)){
    //     return 15 * (d1 - d2)
    // } else {
    //     return 0
    // }
}

```

> So what is happening here?

So much cleaner and still gets the same results. Some benefits of this version are the number of steps that need to be taken versus the previous version. Running each version through JavaScript tutor showed 17 steps vs. 3 steps. That is a major improvement. The solution went from 4 different functions calling each other, to a line of booleans. The `feesToApply` array and other variables have been deemed unnecessary code. We get to the point much faster.

![Code Sample - Original Solution]({{ site.baseurl }}/img/posts/libraryFineRefactored.png){:.center-img}

Even the flow chart has been cleaned up. This one is much easier to follow.
