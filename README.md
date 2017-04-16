# Website Performance Optimization Project

Udacity Front-End Developer Project

## PageSpeed Score

Achieve a score of 90 or above for Mobile and Desktop with Google PageSpeed Insights

### Launch Page

production/index.html

### Optimizations

* Move external CSS to inline
* Remove web font in exchange for local variant
* Add media attribute to external CSS to prevent render blocking
* Resize and optimize images where possible
* Add async attribute to script tags that don't affect the DOM
* Minify CSS, JavaScript, and HTML

## Rid the Jank

Optimize page for a consistent 60fps when scrolling. Optimize resize pizza to be less than 5ms.

### Launch Page

production/views/pizza.html

### Optimizations

##### Achieve 60fps on scroll

* Retrieve .mover nodes only once and convert them into an array
* Move scrollTop access from within the loop to outside loop where it will only be called once
* Filter the .mover nodes to find only those visible in the viewport
* Update only the nodes which are visible
* Add will-change CSS property to the .mover class

##### Resize Pizzas in under 5ms

* Move multiple calls to querySelectorAll to a single one outside the loop
* Simplify function to set width to a percentage
* Remove unnecessary function

## Workflow with Gulp

#### Setup the environment

1. Navigate to the root directory containing the package.json file.
2. Install the developer dependencies:
<code>npm install</code>
3. Run default gulp task
<code>gulp</code>