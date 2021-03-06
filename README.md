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
     		'left-arrow-class': '.left-arrow',                              //Sets the selector class for the left arrow
     		'right-arrow-class': '.right-arrow',                            //Sets the selector class for the right arrow
     		'left-arrow-src': 'images/chevron-left.png',                    //Sets the image source for the left arrow
     		'right-arrow-src': 'images/chevron-right.png',                  //Sets the image source for the right arrow
     		'left-arrow-inactive-src': 'images/chevron-left-inactive.png',  //Sets the image source for the inactive left arrow
     		'right-arrow-inactive-src': 'images/chevron-right-inactive.png' //Sets the image source for the inactive right arrow
     	});
 	});
```

#####Timer
superSlider has the option of automatically advancing and moving through the slides. This option is called the "Timer". There are a couple superSlider configurations to go along with the use of the Timer:

```javascript
 	$(document).ready(function(){
 		$('#superSlider').superSlider({
     		'timer_on': false,                                              //Either true or false, turns Timer on or off
     		'timer_speed': 5000                                             //Speed, in milliseconds, for the automatic advancing of the slides
     	});
 	});
```

#####Pagination
superSlider also has the ability to paginate the slides that are given to it. To enable Pagination, simply set the `pagination` attribute to `true`:

```javascript
    $(document).ready(function(){
        $('#superSlider').superSlider({
            'pagination': true
        });
    });
```

#####Width
You have the option with superSlider of customizing the width of the slides in your slider. You have two different options: `mobile_width`, and `desktop_width`. The `mobile_width` will be the width used for all window sizes `<767px`, while the `desktop_width` will be for window sizes `>=767px`.

```javascript
    $(document).ready(function(){
        $('#superSlider').superSlider({
            'mobile_width': 500,                                            //Number (pixels) width for mobile
            'desktop_width': 1200                                           //Number (pixels) width for desktop
        });
    });
```

#####Left Offset
In order to properly center the slides inside of the confines of your project's container, you may need to specify a specific left offset. This may be done with `left_offset_mobile`, and `left_offset_desktop`:

```javascript
    $(document).ready(function(){
        $('#superSlider').superSlider({
            'left_offset_mobile': 0,                                        //Number (pixels) left offset for mobile
            'left_offset_desktop': 40                                       //Number (pixels) left offset for desktop
        });
    });
```

####Custom Event Handling
Because superSlider.js works largely off of jQuery's custom event engine, you may use this to your advantage in a few different ways.

There are three different events defined when `.superSlider()` is called on a jQuery element:

 -   `'slideLeft'`: event when sliding to the left.
 -   `'slideRight'`: event when sliding to the right.
 -   `'slideTo'`: takes a single integer parameter which is the index of the desired slide to slide to.

You may define your own callbacks when the slider slides to the right or the left, aka:

```javascript
    $(document).ready(function(){
        $('#superSlider').superSlider();

        $('#superSlider').ready(function(){
            $('#superSlider').on('slideRight', function() {
                console.log('Slider Slid Right!');
            });

            $('#superSlider').on('slideLeft', function() {
                console.log('Slider Slid Left!');
            });
        });
    });
```

You may also `.trigger()` the events to call them for yourself:

```javascript
    $(document).ready(function(){
        $('#superSlider').superSlider();

        $('body').click(function(){
            $('#superSlider').trigger('slideRight'); // Slider will slide right when the body is clicked.
        })
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

####Swipe Pagination on Mobile
[`touchwipe.js`](http://www.netcu.de/jquery-touchwipe-iphone-ipad-library) is an optional addon for `superSlider.js`. superSlider is preconfigured to include responsiveness to mobile swipes if the `$.fn.touchwipe()` variable is defined.

You can download touchwipe.js [here](http://www.netcu.de/jquery-touchwipe-iphone-ipad-library).

##Contributing

If you find a bug, or would like to help out with development, just follow some simple steps:

  1. [Make an issue.](https://github.com/JoahG/superSlider.js/issues/new)
  2. [Fork the repo.](https://github.com/JoahG/superSlider.js/fork)
  3. Make your changes.
  4. Commit and create a pull request.

##Author

superSlider.js is written and maintained by [Joah Gerstenberg](http://www.joahg.com), copyright 2014. All code contained within these files are licensed under an [MIT license](https://github.com/JoahG/superSlider.js/blob/gh-pages/LICENSE).
