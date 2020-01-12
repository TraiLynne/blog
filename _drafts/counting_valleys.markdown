# Counting Valleys

> Language(s): JavaScript

Success! I solved Counting Valleys on [HackerRank](https://www.hackerrank.com/). Can you complete the [challenge](https://www.hackerrank.com/challenges/counting-valleys/)?

## Description


> Function Description

Complete the ```countingValleys``` function. It must return an integer that denotes the number of valleys Gary traversed.

> Parameter(s)

```countingValleys``` has the following parameter(s):

```n```: the number of steps Gary takes

```s```: a string describing his path

> Input Format

The first line contains an integer , the number of steps in Gary's hike.
The second line contains a single string , of  characters that describe his path.

> Constraints

- ```n``` will be between or equal to 2 and 10^6
- ```s``` will consist of the letters U or D

> Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

> Sample Input

```8```

```UDDDUDUU```

> Sample Output

```1```


## Decomposition: 

> Break It Down

1. Start at level 0
2. Determine the direction of the next step
3. Add or Subtract based on level
4. Confirm if the previous status was above or bellow sea level    
    - if above, add 1 to valleys
    - if below, valley number does not change
5. After full traversal, return number of valleys

## Abstraction: 

> What is Absolutely Needed

- The steps string
- Valley Counter
- Valley status


## Pattern Recognition 

> Possible Functions

- Determine level 
- Compare previous level status and update as needed

## Pseudocode

```
function valleyCounter(n, s){
	steps = s.split
	v = 0
	currentLevel = 0
	inValley = false

	steps.forEach( s -> {
		calculateLevel()
		detemineValley()
	}

	return v;
end 
```

```
calculateLevel(s){
	if s = U
		currentLevel += 1
	else 
		currentLevel -=1
}
```

```
determineValley(currentLevel, v, inValley) {
	if (currentLevel < 0 && inValley = false)
		v += 1
		inValley = true
	if (currentLevel >= 0 && inValley = true)
		inValley = false
}
```

## My Solution

```
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