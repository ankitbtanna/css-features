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
