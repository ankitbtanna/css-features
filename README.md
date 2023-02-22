# How to pick which CSS unit to use when?

### It depends...

## Font Size - rem

- most of the time 1 rem = 16px
- you can set it to html > font-size: 10px
- Working of base 16 is hard
- html > font-size: 62.5% = 10px
- Avoid em for font size

## Width

- Harder things
- % coupled with max-width
- vw may be good but may cause trouble
- dvw is also good
- ch is also good = width of number 0, 75 characters per line, 20 characters per line...

## Height

- Do you absolutely need height? Think thrice.
- If still yes, use min-height
- %, rem, vh, dvh are all good

## Padding or margin

- em/rem
- em ---> adjust based one element's font-size
- rem ---> based on your base font-size
- em ---> marging > for h1 than on h3, h4, h5...

## Media Query

- rem is preferred

## Other units

- em, rem, %, vh, dvh, vw, dvw, ch
- px is rarely used

---

# Semantic CSS

- https://css-tricks.com/user-facing-state/
- https://www.smashingmagazine.com/2013/08/semantic-css-with-intelligent-selectors/
- https://adrianroselli.com/2021/06/using-css-to-enforce-accessibility.html
- https://benmyers.dev/blog/semantic-selectors/

The main thing I want you to take away from all of this is that if you are only toggling classes to visually manage state of your components, you are likely not appropriately conveying that state to users of assistive technologies.

You need to be using the appropriate elements (<button></button>s are your friend!), and managing the appropriate attributes and their values to make truly accessible user experiences. Sure, you could to do those things and continue to toggle stateful classes to control your styling. But if we have to update attributes and their values, and those are also valid CSS selectors, then why would we do more work than needed by toggling classes too?

---

# Logical CSS properties

- To support different type of languages using CSS
- Some languages may not use margin-left

Before we begin with CSS logical properties, let us understand the main flow of the website. Its all about axis
There are 2 axis in a website:

1. Block Axis (top to bottom)
2. Inline Axis (left to right)

[Read more](https://www.geeksforgeeks.org/css-logical-properties/)
![image](/src/assets/1.png)

Block axis is the main flow of the website and inline is the way we read. For example, in English, we read from left to right. So, inline axis is left to right.

Traditional Japanese website is 90 degrees rotated. So, inline axis is top to bottom.
[Traditional Japanese website](https://huijing.github.io/zh-type/)

For controlling the _Block Axis_:

There is a CSS property called `writing-mode` whose default value is `horizontal-tb`. It is used to change the direction of the inline axis. It can be changed to `vertical-rl` or `vertical-lr` to change the direction of the inline axis.

## Normal website

![image](/src/assets/2.png)

## Traditional Japanese website

![image](/src/assets/3.png)

## Traditional Mongolian website

![image](/src/assets/4.png)

For controlling the _Inline Axis_:

There is a CSS property called `direction` whose default value is `ltr`. It is used to change the direction of the inline axis. It can be changed to `rtl` to change the direction of the inline axis.

![image](/src/assets/5.png)

We've been living in old physical properties:
![image](/src/assets/6.png)

But now we have logical properties, i.e. the axis of the website: block axis and inline axis.
![image](/src/assets/7.png)

Traditional Japanese website will rotate this axis by 90 degrees.
![image](/src/assets/8.png)

Instead of creating website that goes from left to right, we can create website that goes from top to bottom.

We need to update our thinking when we are dealing with logical properties.

- `top --> block-start`
- `bottom --> block-end`
- `left --> inline-start`
- `right --> inline-end`

![image](/src/assets/9.png)

In similar way, all the box model properties are updated to logical properties.
![image](/src/assets/10.png)

For width and height, we can use `block-size` and `inline-size`.
![image](/src/assets/11.png)

This means that we now have a new box model using the CSS logical properties.
![image](/src/assets/12.png)

We also have `position` attribute in CSS.
![image](/src/assets/13.png)

Instead of 1 word properties, we now have 3 word properties. Just like `margin` shorthand, we have `inset` shorthand.
![image](/src/assets/14.png)

More useful properties:
![image](/src/assets/15.png)

You can chose to use both old and new properties. But it is recommended to use only logical properties.

CSS flexbox is already using logical properties.
![image](/src/assets/16.png)

CSS grid is also using logical properties.
![image](/src/assets/17.png)

So how do we translate old physical properties to logical properties?
![image](/src/assets/18.png)

How do we test if our website is using logical properties?
![image](/src/assets/19.png)

[Try CodePen](https://www.geeksforgeeks.org/css-logical-properties/)

---

[Slides](https://docs.google.com/presentation/d/1rRYSh3Bzzlo0Sdoyk4qrKv3RqfruF4ac-H4IkvRH_J0/edit#slide=id.g33b8a566a1_2_27)

## Problems

- Shorthands are a problem. If you use shorthand, it will by default take it as a physical property rather than logical property. So you need to use all the properties as a separate property.
  W3C is working on this problem. They are trying to make it so that if you use shorthand, it will automatically take it as a logical property.
  `margin: 10px 20px 30px 40px;` _Physical properties_
  `margin: logical 10px 20px 30px 40px;` _Logical properties_

Other possible solution to be declared in root elememnt:
`flow-mode: logical OR physical;`

- Logical properties are not working in media queries. So, if you want to use logical properties in media queries, you need to use physical properties.
  ![image](/src/assets/20.png)
  There are only specific properties allowed to be written in brackets of media queries. Logical properties are not allowed currently.

## Browser support

- Logical properties are supported quite well
- Block model properties are supported in all browsers
- Floats/Position/Resize - not supported in all browsers. Only supported in Firefox and Chrome. Do check MDN for current status.
  [Read Here](https://drafts.csswg.org/css-logical/)
