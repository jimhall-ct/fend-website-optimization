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

Requirements: [NPM](https://nodejs.org), [ImageMagick](https://www.imagemagick.org/script/download.php)

1. From the command line, navigate to the root directory containing the package.json file
```shell
cd <path-to-package.json>
```
2. Install the developer dependencies:
```shell
npm install
```
3. Run default gulp task
```shell
gulp
```
The default task is responsible for copying and minifying the css, javascript, and html files into the production folder. It will update when new files are created or updated. A local web server is available to view production site and will automatically update (live reload) when changes are made to source files.

4. Resize Images gulp task (Optional)
```shell
gulp resize_images
```
This task will load all images (png, jpg, gif) from development directories, resize them, move them to the production directories . The task by default will create images of sizes (120, 240, 360, 480, 640, 800, 1000) with a quality of 0.5, no images will be upscaled.