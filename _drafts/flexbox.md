Background

We’ve been through the pain of manually aligning our elements. We have endured the `margin: 0 auto`s for that perfect horizontal centering. But let’s face it, there has to be a better and easier way. Well, of course, there is. But to understand something, it is always best to start at the beginning. Because of our understanding of the display property, we can now easily incorporate Flexbox into our tool belt. 

Flexbox is not just a property value that we add to an element. It is more powerful than that. It is an entire CSS module that packs new rules, options, and properties into an element and its first set of children. Flexbox has one goal in mind, to best use and fill the available space. To accomplish this, Flexbox adjusts the size of the flex items within a flex container by growing or shrinking them to fill available space while simultaneously preventing overflow.

Terminology

Let’s get familiar with some of the terms I have been throwing around & others used within the Flexbox universe.

Let's begin with the Flex Container. Establishing flex as the value to the display property of an element creates the flex container. There can be infinite flex containers on a web page. We can also nest a container inside a container. 

Next is the Flex Items. These are ONLY the first-child elements within the Flex container. Any children at a deeper level are not affected by this property. (That’s of course unless a child becomes a container.)

Flex Lines

Main & Cross. These are two words you want to master and commit to memory for Flexbox. You will start to notice a pattern as we continue. 

Axis: There are 2 axes, the main axis and the cross axis. These two will ALWAYS be perpendicular. However, the preceding portrayal is not law. The main axis is the direction flex items are following, either in a row or a column. The `flex-direction` will be the determining factor.  The opposing direction is now the cross axis.

Start/End: Did you notice that both the axes have a starting and ending point? The main-start marks where the flex items begin. The cross-start line represents where different lines of content will begin. 

Size: The main size of a flex item will be equal to the length or width of the flex container. It all just depends on the direction of the axis. If the main axis is horizontal, the main size is the width. On the other hand, if the main axis is vertical, the main size will be the height. The cross size will always be the opposite. 

It all just depends on the direction of the axis being represented. If the main axis is horizontal, the main size is the width. On the other hand, if the main axis is vertical, the main size will be the height. The cross size will always be the perpendicular measurement.

The main thing to remember is the main axis is the direction the content will be laid out.

Activate

Activating the Flexbox module is rather straightforward. The easiest way is to add a class to your soon to be the container. Within the CSS, add display: flex; as a property to this element. Done and done. Yup, it was that easy.

Now to take advantage of the additional properties Flexbox provides, I recommend heading over to https://css-tricks.com/snippets/css/a-guide-to-flexbox/ ( to get a Complete Guide to Flexbox. I could not give Flexbox the correct justice it deserves without just reiterating all the information placed int hat resource.

Disclaimer :: Remember , this is for small-scale applications & layouts. For those larger-scale projects, check out CSS Grid. 