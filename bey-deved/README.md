# ANIMATION

<br>

[YT tutorial](https://www.youtube.com/watch?v=sN93DRYkCO8&list=PLmGRn_VnTuAxIHKjfgoOEOIk72PeZdbaB&index=129)
<br>

[GSAP animation library used](https://greensock.com/gsap/)
<br>

<hr />
<br>

## Steps

<br>

1. Search for [GSAP 3 CDN](https://cdnjs.com/libraries/gsap).

import this into HTML:
<br>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" integrity="sha512-GQ5/eIhs41UXpG6fGo4xQBpwSEj9RrBvMuKyE2h/2vw3a9x85T1Bt0JglOUVJJLeyIUl/S/kCdDXlE/n7zCjIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<br><br>

<hr />

<br>

**CSS**

<br><br>

2. Setting `box-size: border-box` helps with styling elements because the element stays inside the desired width and height, **including margins and padding**.

<br>

When dealing with `position: absolute` or `relative`, it is better to use `box-size: content-box` because it allows positioning values to be relative to the content, and independent of changes to border and padding sizes

<br><br>

3. `list-style: none` gets rid of bullets

<br><br>

4.  Make a black cover to implement it into animation. It will cover the whole first part of the page.
    <br>

        <main>
          ...
        </main>

        <div class="intro">
          ...
        </div>

        <div class="slider"></div>

    <br>

        .intro {
          background: rgb(0, 0, 0);

          /* covers up the "main" */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          /* put text in center */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

    <br><br>

5.  Making the slider.
    <br>

Copy everything from the `intro`. Change color and remove display properties. Then move it down so it is invisible.

<br><br>

6. Hide the text.
   <br>

Since it is a `span`, it is an inline element. You need to set it to `display: inline-block` to be able to use `transform: translate` on it.
<br>

    .hide {
      background: black;
      overflow: hidden;
    }

    .hide span {
      display: inline-block;
      transform: translateY(100%);
    }

<br><br>

<hr />
<br>

**JS**
<br><br>

7. Use GSAP for animation.
   <br>

`defaults` syntax example: `gsap.defaults({ ease: "power2.in", duration: 1 });`
<br>

[GSAP defaults](https://greensock.com/docs/v3/GSAP/gsap.defaults()
<br><br>

Find list `defaults` [here](https://greensock.com/docs/v3/Eases#:~:text=GSAP%20uses%20a%20default%20ease%20of%20%22power1.).
<br><br>
