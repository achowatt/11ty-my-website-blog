---
layout: blog-layout.njk
title: CSS selectors
date: 2020-09-28
tags: ["post"]
---

<!-- Excerpt Start -->

Knowing different types of CSS selectors can give you a lot more flexibility! It allows you to target elements without touching the class names directly.

<!-- I started noticing the importance of this at my first job where I needed to access a class but due to the integration of other things, I couldn't simply add or change class directly without impacting something else. From there, I realized that I could target the surrounding elements without having to target the element that I want to select directly. -->

<!-- Excerpt End -->

<br>

Check out this awesome link to practice! <a style="color:#c9ae78;">https://flukeout.github.io/</a>

<br>

# Quick Overview

A + B\
A ~ B\
:first-child\
:only-child\
:last-child\
:not(.big, .medium)\
:nth-child(2)\
:nth-last-child(2)\
:first-of-type\
:nth-of-type(2)\
:nth-of-type(2n + 1)\
:only-of-type\
a[for="Ethan"] or a[href]\
[for^="Sa"]\
[for$="Sa"]\
img[src*="/thumbnails/"]\
:empty

## Adjacent sibling selector +

```css
A + B {
}
```

Selects ONE element that directly follows another element

<br>

## General sibling selector

```css
A ~ B {
}
```

Selects all the sibling elements

<br>

## First child

```css
div p:first-child {
}
```

Selects paragraph that is the first child of div

<br>

## Only child

```css
div p:only-child {
}
```

Selects the paragraph that’s the only child of a div

<br>

## Last child

```css
p:last-child {
}
```

Selects all the p that’s the last child.
(In cases where there is only one element, that element counts as the first-child, only-child and last-child!)

<br>

## Nth child pseudo selector

```css
div p:nth-child(2) {
}
```

<br>

## Nth last child selector

```css
div p:nth-last-child(2) {
}
```

Same as nth child but starting from the back

<br>

## First of type

```css
div p:first-of-type {
}
```

Selects the first element of that type within another element.

<br>

## Nth of type

```css
div p:nth-of-type(2) {
}
```

Selects the nth element of that type within another element.
.example:nth-of-type(odd)
.example:nth-of-type(even)

<br>

## Nth-of-type Selector with Formula

```css
span:nth-of-type(An + B) {
}
```

Selects every 6th instance of a span, starting from (and including) the second instance.

<br>

## Only of Type Selector

```css
p span:only-of-type {
}
```

Selects a span within any p if it is the only span in there.

<br>

## Last of type selector

```css
:last-of-type {
}
```

<br>

## Empty Selector

```css
:empty {
}
```

Select elements that don't have children

<br>

## Negation Pseudo-class :not

```css
:not(#fancy) {
}
div:not(:first-child) {
}
:not(.big, .medium) {
}
```

<br>

## Attribute Selector []

```css
[for] {
  //by itself would work too
}
a[for="Ethan"] {
}
a[href]  {
}
```

Selects all a elements that have a href="anything" attribute.

<br>

## Attribute Starts With Selector ^=

```css
[attribute^="value"] {
}

[for^="“Sa”"] {
}
```

Selects all elements with an attribute value that starts with specific characters

<br>

## Attribute Ends With Selector $=

```css
[attribute$="value"] {
}

[for$="“Sa”"] {
}
```

Selects all elements with an attribute value that ends with specific characters

<br>

## Attribute Wildcard Selector \*=

```css
[attribute*="value"] {
}

img[src*="/thumbnails/"] {
}
```

Selects all elements with an attribute value that contains specific characters
