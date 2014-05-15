/*!
 * superSlider.js v1.0.3 (https://github.com/JoahG/bibleRef.js)
 * Copyright 2014 Joah Gerstenberg
 * Licensed under MIT License (https://github.com/JoahG/superSlider.js/blob/gh-pages/LICENSE)
 */
(function($) { 
	$.fn.superSlider = function($scope) {
		$scope = $scope == undefined ? {} : $scope;
		var slider = this;
		var lis = this.find('li');
		var ul = this.find('ul');
		var larrow = $scope['left-arrow-class'] ?  this.find($scope['left-arrow-class']) : this.find('.left-arrow');
		var rarrow = $scope['right-arrow-class'] ?  this.find($scope['right-arrow-class']) : this.find('.right-arrow');
		var larrow_src = $scope['left-arrow-src'] ?  $scope['left-arrow-src'] : 'images/chevron-left.png';
		var rarrow_src = $scope['right-arrow-src'] ?  $scope['right-arrow-src'] : 'images/chevron-right.png';
		var larrow_inactive_src = $scope['left-arrow-inactive-src'] ?  $scope['left-arrow-inactive-src'] : 'images/chevron-left-inactive.png';
		var rarrow_inactive_src = $scope['right-arrow-inactive-src'] ?  $scope['right-arrow-inactive-src'] : 'images/chevron-right-inactive.png';
		$scope.indices = lis.length;
		$scope.index_shown = 0;
		$scope.timer_speed = $scope.timer_speed ? $scope.timer_speed : 5000;
		$scope.timer_on = $scope.timer_on === false || $scope.timer_on === 'false' ? $scope.timer_on : true;
		$scope.do_the_magic = function() {
			if ($(window).width() < 767) {
				$scope.magic_number = $scope['mobile_width'] ? $scope['mobile_width'] : 500;
				$scope.left = 0;
			} else {
				$scope.magic_number = $scope['desktop_width'] ? $scope['desktop_width'] : 1200;
				$scope.left = 40;
			}
		}
		$scope.check_activity = function() {
			if ($scope.index_shown <= 0) { larrow.addClass('inactive').attr('src', larrow_inactive_src); }
			if ($scope.index_shown >= $scope.indices-1) { rarrow.addClass('inactive').attr('src', rarrow_inactive_src); }
			if ($scope.index_shown > 0) { larrow.removeClass('inactive').attr('src', larrow_src); }
			if ($scope.index_shown < $scope.indices-1) { rarrow.removeClass('inactive').attr('src', rarrow_src); }
		}
		$scope.goto_slide = function(n) {
			$scope.do_the_magic();
			ul.css('left', ($scope.left + (n * (0-$scope.magic_number))).toString()+'px');
			$scope.index_shown = n;
			lis.removeClass('current');
			ul.find('li:nth-child('+($scope.index_shown+1)+')').addClass('current');
			$scope.check_activity();
		}
		$(document).ready(function(){
			$(slider).off('click', ".right-arrow:not(.inactive)");
			$(slider).off('click', ".left-arrow:not(.inactive)");
			$(slider).on('click', ".right-arrow:not(.inactive)", function() { $scope.goto_slide($scope.index_shown+1) });
			$(slider).on('click', ".left-arrow:not(.inactive)", function() { $scope.goto_slide($scope.index_shown-1) });
			$scope.do_the_magic();
			lis.each(function(i,v) { $(v).css('left', i*$scope.magic_number); });
			ul.on('click', "li:not(.current)", function(e){ e.preventDefault(); $scope.goto_slide($(this).index()); });
			if ($.fn.touchwipe !== undefined) {
				$(".slider").touchwipe({ 
					wipeLeft: function() {
						if (!(rarrow.hasClass('inactive'))) {
							$scope.goto_slide($scope.index_shown+1);
						}
					}, wipeRight: function() {
						if (!(larrow.hasClass('inactive'))) {
							$scope.goto_slide($scope.index_shown-1);
						}
					} 
				});
			}
			if ($scope.timer_on !== undefined && $scope.timer_on == true) {
				var timer_helper = function() {
					if (!(rarrow.hasClass('inactive'))) {
						$scope.goto_slide($scope.index_shown+1);
					} else {
						$scope.goto_slide(0);
					}
				}
				var timer = setInterval(function(){
					timer_helper();
				}, $scope.timer_speed);
				slider.on('mouseenter', function(){
					clearInterval(timer);
				});
				slider.on('mouseleave', function(){
					timer = setInterval(function(){
						timer_helper();
					}, $scope.timer_speed);
				});
			}
		});
	};
})(jQuery);