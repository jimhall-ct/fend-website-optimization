# Website Performance Optimization Project

Udacity Front-End Developer Project

## PageSpeed Score

Achieve a score of 90 or above for Mobile and Desktop with Google PageSpeed Insigts

### Launch Page

production/index.html

### Optimizations

* Move external CSS to inline
* Remove web font for local variant
* Add media attribute to external CSS to prevent render blocking
* Resize and optimize images where possible
* Add async attribute to script tags that don't affect the DOM
* Minify CSS, JavaScript, and HTML

## Rid the Jank

Optimize page for a consistent 60fps when scrolling. Optimize resize pizza to be less than 5ms.

### Launch Page

production/views/pizza.html

### Optimizations

##### Achieve 60fps

* Get .mover nodes only once and convert them into an array
* Remove scrollTop access from the loop which only calls it once
* Filter the .mover nodes to find only those visible in the viewport
* Update only the nodes which are visible

##### Resize under 5ms

* Move multiple calls to querySelectorAll to a single one outside the loop
* Simplify function to set width to a percentage

## Worflow with Gulp