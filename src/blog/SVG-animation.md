---
layout: blog-layout.njk
title: Getting started with SVG animation
date: 2021-01-24
tags: ["post"]
---

<!-- Excerpt Start -->

Under Construction

<!-- Excerpt End -->

<br>

# Quick Overview

<br>

1. Create image inside Figma (drop and drag, or make SVG directly there)

2. Export image (be sure to include the ID)

3. Drag the file into workspace

4. You have two choices, 1) copy and paste the SVG tag directly into the html file. 2) put the svg file into the asset folder (or a different folder), and add an object tag in the html file (to reference the svg).
   If you choose the second option, include this tag:

   ```html
   <object type=“image/svg+xml” data=“assets/Cookies.svg”></object>
   ```

5. The CSS file will not connect automatically if you have your SVG on a seperate file. As a result, nothing is going to happen when you try to style the ID's. You’ll have to go to the svg file and add the following tag to fix this issue:

   ```xml
   <?xml-stylesheet href="index.css" type="text/css"?>
   ```

   Make sure you connect it to the right css file in the href.

   <br>
   <hr>
   <br>
