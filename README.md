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