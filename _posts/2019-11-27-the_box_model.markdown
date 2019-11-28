---
layout: post
title:  "The Box Model (2019 Edition)"
subtitle: "The Anatomy of All HTML Elements"
date:   2019-11-27 15:23:00 -0500
categories: tech
background: '/img/posts/bg-default.jpg'
---

# The Box Model

![the box model](../img/posts/box-model.png)

Every HTML element has the same anatomy. They share common properties that we can modify to create the structure and render them to the page. We like to refer to this set up as __The Box Model__. You start to use these properties more when you get on the design side of Web Development.

## Margin

![margin](../img/posts/box-model-margin.png)

Working from the outside in, we are first introduced to the margin. This can be defined as the transparent area (whitespace) that surrounds the element or space between the border of an element and everything else on the page.

To the School House Rock fans out there, you’ve got to remember the song Elbow Room. This is the exact property supplied to every element that grants that much-needed elbow room. We manipulate this property in order to create a pleasant experience and an uncluttered interface for the user.

### Values Accepted
- `auto`
    - this allows the browser to calculate the margin
    - typical example is `margin: 0 auto` used to horizontally center content on a screen
- length
    - measured in px, pt, cm, etc
- `%`
    - specifies the margin as a percentage in comparison to the containing element
- `inherit`
    - means that the margin will use the same measurement as the parent element

### CSS Example
```
.example {
    <!-- Adjust Individual Sides -->
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;

    <!-- SHORTHANDS -->

    <!-- Adjust All -->
    margin: 20px;

    <!-- Top -> Right -> Bottom -> Left -->
    margin: 20px 30px 40px 50px;

    <!-- Top -> Right & Left -> Bottom -->
    margin: 20px 40px 30px;

    <!-- Top & Bottom -> Right & Left -->
    margin: 20px 40px;
}
```

## Border

![margin](../img/posts/box-model-border.png)

Whether it’s seen or not, the border of an element is always there. This is the membrane around the element that holds it all in. Styling can be added for visual effects or aesthetic appeal. Appropriately named, the border is what separates the margin and everything outside the element from the padding and content within.

### Parts of the Border
#### Style
This lets the browser know what kind of border to display. There are a number of border styles that we can use including:
- dotted
- dashed
- solid
- double

```
.example {
    <!-- All Sides -->
    border-style: dotted;
    border-style: ridge;

    <!-- top -> Right -> Bottom -> Left -->
    border-style: dotted solid dashed double;

    <!-- Top -> Right & Left -> Bottom -->
    border-style: dotted solid dashed;

    <!-- Top & Bottom -> Right & Left -->
    border-style: dotted double;
}
```

#### Width
The width of a border can be set in px, pt, cm, em, or other computer mesurements. There are also the 3 predefined options:
- thin
- medium
- thick

```
.example {
    border-width: 5px;
    border-width: medium;
}
```

#### Color
The color of a border can be set using the name of the color, Hex values, RGB values or even transparent.

```
.example {
    border-color: red;
    border-color: #FF0000;
    border-color: rgb(255, 0, 0);
    border-color: transparent;
    
    <!-- Different sides can have different colors -->
    border-color: red orange yellow green;
}
```

### Individual Sides
The individual sides of a border can be changed as well by following this syntax: `border-{side}-{property}`

```
.example {
  border-top-style: dotted;
  border-right-width: 2px;
  border-bottom-color: green;
  border-left-style: solid;
}
```

### Shorthand Syntax
```
.example {
    <!-- border: {size} {style} {width}; -->
    border: red solid 1px;
}
```

## Padding

![margin](../img/posts/box-model-padding.png)

We have officially entered the inside of the element. The margin created elbow room outside the element, the padding does the same for the inside. Yes, it is just more whitespace. Nevertheless, it is still important to understand in order to guarantee a great user experience and interface. It provides readability by keeping the content we see from crashing into the border or running so close to the edge.

You can find similarities for it's syntax when compared to margin. 

### Values Accepted
- length
    - measured in px, pt, cm, etc
- `%`
    - specifies the margin as a percentage in comparison to the containing element
- `inherit`
    - means that the margin will use the same measurement as the parent element

### CSS Example
```
.example {
    <!-- Adjust Individual Sides -->
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;

    <!-- SHORTHANDS -->

    <!-- Adjust All -->
    padding: 20px;

    <!-- Top -> Right -> Bottom -> Left -->
    padding: 20px 30px 40px 50px;

    <!-- Top -> Right & Left -> Bottom -->
    padding: 20px 40px 30px;

    <!-- Top & Bottom -> Right & Left -->
    padding: 20px 40px;
}
```

## Content

![margin](../img/posts/box-model-content.png)

This is the text or image that is rendered, what the user actually sees and interacts with. While most users unknowingly appreciate all the properties of the Box Model, the content typically takes the most attention. When all the other properties of the element are balanced, the content is eye-catching, scroll-stopping material.

## Wrap-Up

The Box Model can be very useful to understand when it comes to the designing a web page, from giving an element color to creating readability.

Just remember the 4 basic parts of every HTML element:
- __Margin:__ area outside the border
- __Border:__ the outer skin
- __Padding:__ the invisible area inside the border 
- __Content:__ what the user sees rendered to the page 

### Resources
- [MDN: The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [W3Schools CSS Box model](https://www.w3schools.com/Css/css_boxmodel.asp)
- [W3Schools CSS Margins](https://www.w3schools.com/Css/css_margin.asp)
- [W3Schools CSS Borders](https://www.w3schools.com/Css/css_border.asp)
- [W3Schools CSS Padding](https://www.w3schools.com/Css/css_padding.asp)