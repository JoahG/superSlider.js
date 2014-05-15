superSlider.js
==============

superSlider.js: the superhero of jQuery sliders

---

To see a demo of superSlider.js in action, check out the [demo page](http://www.joahg.com/superSlider.js/demo.html).

##Usage

####Initialization

The jQuery JavaScript library is a dependency of superSlider.js, so be sure to reference the jQuery library before initiating superSlider.js:

```html
     <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
     <script src="/path/to/superSlider.min.js"></script>
```

To initialize a superSlider, call the jQuery `.superSlider()` function on the jQuery object containing your HTML Slider, passing in an object for configurations:

```html
     <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
     <script src="/path/to/superSlider.min.js"></script>
     <script>
     	$(document).ready(function(){
     		$('#superSlider').superSlider({
	     		// Configurations will live here.
	     	});
     	});
     </script>
```

You should also link to the included `superSlider.css` file for styling, unless you want to build your own styles.

```html
	<link rel="stylesheet" type="text/css" href="/path/to/superSlider.css">
```

####Configuration

#####Left/Right Arrows
There are several configurations available for the left and right arrows for the slider. They can all be seen below, in the context of a `.superSlider()` call.

```javascript
 	$(document).ready(function(){
 		$('#superSlider').superSlider({
     		'left-arrow-class': 'string',         //Sets the selector class for the left arrow (default '.left-arrow')
     		'right-arrow-class': 'string',        //Sets the selector class for the right arrow (default '.right-arrow')
     		'left-arrow-src': 'string',           //Sets the image source for the left arrow (default 'images/chevron-left.png')
     		'right-arrow-src': 'string',          //Sets the image source for the right arrow (default 'images/chevron-right.png')
     		'left-arrow-inactive-src': 'string',  //Sets the image source for the inactive left arrow (default 'images/chevron-left-inactive.png')
     		'right-arrow-inactive-src': 'string'  //Sets the image source for the inactive right arrow (default 'images/chevron-right-inactive.png')
     	});
 	});
```

#####Timer
superSlider has the option of automatically advancing and moving through the slides. This option is called the "Timer". There are a couple superSlider configurations to go along with the use of the Timer:

```javascript
 	$(document).ready(function(){
 		$('#superSlider').superSlider({
     		'timer_on': 'boolean',                //Either true or false, turns Timer on or off (default false)
     		'timer_speed': 'integer'              //Speed, in milliseconds, for the automatic advancing of the slides
     	});
 	});
```

#####Width
You have the option with superSlider of customizing the width of the slides in your slider. You have two different options: `mobile_width`, and `desktop_width`. The `mobile_width` will be the width used for all window sizes `<767px`, while the `desktop_width` will be for window sizes `>=767px`.

```javascript
    $(document).ready(function(){
        $('#superSlider').superSlider({
            'mobile_width': 'integer',              //Number (pixels) width for mobile (default 500)
            'desktop_width': 'integer'              //Number (pixels) width for desktop (default 1200)
        });
    });
```
    

####Recommended HTML Layout
While superSlider should work with several HTML layouts, here is the way I built it to work:

```html
	<div class="slider" id="superSlider">
		<img class="left-arrow inactive" src="images/chevron-left-inactive.png">
        <img class="right-arrow" src="images/chevron-right.png">
        <ul>
			<li class="current"> <!-- first <li> is to be .current -->
				<div class="info">
				  <header><a href="#">Interdum et</a></header> <!-- Title of slide -->
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh lorem. Maecenas vitae erat eu justo convallis porttitor pretium at purus. In lacus orci, lobortis non luctus eget, posuere sed dolor.</p> <!-- Description of slide -->
				</div>
				<a href="#"> <!-- Link for image -->
				  <img src="http://placehold.it/960x440"> <!-- Image for slide -->
				</a>
			</li>
			<!-- As many <li>s as you want -->
		</ul>
	</div>
```

##Contributing

If you find a bug, or would like to help out with development, just follow some simple steps:

  1. [Make an issue.](https://github.com/JoahG/superSlider.js/issues/new)
  2. [Fork the repo.](https://github.com/JoahG/superSlider.js/fork)
  3. Make your changes.
  4. Commit and create a pull request.

##Author

superSlider.js is written and maintained by [Joah Gerstenberg](http://www.joahg.com), copyright 2014. All code contained within these files are licensed under an [MIT license](https://github.com/JoahG/superSlider.js/blob/gh-pages/LICENSE).
