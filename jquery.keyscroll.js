/*!
 * jquery keyscroll plugin
 * Copyright (C) KAYAC Inc. | http://www.kayac.com/
 * Dual licensed under the MIT <http://www.opensource.org/licenses/mit-license.php>
 * and GPL <http://www.opensource.org/licenses/gpl-license.php> licenses.
 * Date: 2010-05-18
 * @author kyo_ago
 * @version 1.0.0
 * @require jQuery 1.3 or later
 * @see http://github.com/kyo-ago/jQuery.keyscroll
 */
$.keyscroll = function (option) {
	option = $.extend({
		'scroll_type' : 'quart',
		'time' : 900,
		'selector' : '.entryWrapper'
	}, option);
	//smooth scroll
	$.easing.quart = $.easing.quart || function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	};
	$.fn.smooth_scroll = $.fn.smooth_scroll || function () {
		$('html, body').stop().animate({
			'scrollTop' : this.offset().top
		}, option.time, option.scroll_type);
	};
	$(function () {
		$($.browser.msie ? 'body' : window).keyup(function (e) {
			if (!(e.keyCode == 37 || e.keyCode == 39)) return;
			if ($(e.source).is(':input')) return;
			e.preventDefault();
			$('html, body').stop();
			var top = +(
				window.pageYOffset
				|| document.documentElement.scrollTop
				|| document.body.scrollTop
			) || 0;
			var last_scroll = setTimeout(function () {
				if (!$('html, body').is(':animated')) $('.pager:last').smooth_scroll();
			}, 0);
			var entrys = $(option.selector);
			entrys.each(function (index) {
				var offset = ~~($(this).offset().top) || 0;
				// <- key
				if (e.keyCode == 37) {
					var len = entrys.last().filter(this).length;
					if (!len && (offset < top)) return;
					if (len && (offset < top)) return $(this).smooth_scroll();
					$(this).add(entrys.eq(index-1)).eq(0).smooth_scroll();
					return false;
				};
				// -> key
				if (offset <= top) return;
				$(this).smooth_scroll();
				clearTimeout(last_scroll);
				return false;
			});
		});
	});
};
