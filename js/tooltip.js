/*;(function($) {

	var defaultOptions = {
		'content': 'tooltip default message',
		'contentSelector': '',
		'position': 'bottom',

		'wrapperClassName': 'wrapperClassName',
		'contentClassName': 'contentClassName',

		'width': '200px',
		'heigth': '200px',

		'event': 'click',

		'onOpen': function() {
			console.log('tooltip opened');
		},
		'onClose': function() {
			console.log('tooltip closed');
		}
	}

		function _createTooltipObj(options) {

			var tooltip = $('<div>', {
				'class': options.contentClassName,
				'text': options['content'] || $(options.contentSelector).html()
			});
			tooltip.css({
				'position': 'absolute',
				'display': 'none',
				'border': '1px solid #000',
				'background': 'yellow'
			});
			_settooltipPosition(options, tooltip);
			return tooltip;
		}

		function _onOpen(options, e) {
			$(this).off(options.event);
			$(this).on('mouseleave', function(e) {
				$('.' + options.contentClassName, this).css('display', 'none');
				_onClose.call(this, options, e);
			});
			options['onOpen'].call();
		}

		function _onClose(options, e) {
			$(this).off('mouseleave');
			$(this).on(options.event, function(e) {
				$('.' + options.contentClassName, this).css('display', 'block');
				_onOpen.call(this, options, e);
			})
			options['onClose'].call();
		}

		function _settooltipPosition(options, tooltipObj) {
			switch (options.position) {
				case 'top':
					tooltipObj.css('bottom', '100%');
					break;
				case 'bottom':
					tooltipObj.css('top', '100%');
					break;
				case 'left':
					tooltipObj.css('right', '100%');
					break;
				case 'right':
					tooltipObj.css('left', '100%');
					break;
				default:
					console.log('Error. Wrong position parameter.')
			}
		}

	$.fn.tooltip = function(options) {
		var position = this.css('position');

		options = $.extend(defaultOptions, options);

		this.tooltipObj = this.tooltipObj || _createTooltipObj(options);

		if (position !== 'relative' || position !== 'absolute') {
			this.css('position', 'relative');
		}

		this.append(this.tooltipObj);

		this.on(options['event'], this, function(e) {
			$('.' + options.contentClassName, this).css('display', 'block');
			_onOpen.call(this, options, e);
		});

		return this;
	}

})(jQuery);

*/

;(function() {

	var defaultOptions = {
		'content': 'tooltip default message',
		'contentSelector': '',
		'position': 'bottom',

		'wrapperClassName': 'wrapperClassName',
		'contentClassName': 'contentClassName',

		'width': '200px',
		'heigth': '200px',

		'event': 'click',

		'onOpen': function() {
			console.log('tooltip opened');
		},
		'onClose': function() {
			console.log('tooltip closed');
		}
	}

		function _createTooltipObj(options) {

			var tooltip = $('<div>', {
				'class': options.contentClassName,
				'text': options['content'] || $(options.contentSelector).html()
			});
			tooltip.css({
				'position': 'absolute',
				'display': 'none',
				'border': '1px solid #000',
				'background': 'yellow'
			});
			_settooltipPosition(options, tooltip);
			return tooltip;
		}

		function _onOpen(options, e) {
			$(this).off(options.event);
			$(this).on('mouseleave', function(e) {
				$('.' + options.contentClassName, this).css('display', 'none');
				_onClose.call(this, options, e);
			});
			options['onOpen'].call();
		}

		function _onClose(options, e) {
			$(this).off('mouseleave');
			$(this).on(options.event, function(e) {
				$('.' + options.contentClassName, this).css('display', 'block');
				_onOpen.call(this, options, e);
			})
			options['onClose'].call();
		}

		function _settooltipPosition(options, tooltipObj) {
			switch (options.position) {
				case 'top':
					tooltipObj.css('bottom', '100%');
					break;
				case 'bottom':
					tooltipObj.css('top', '100%');
					break;
				case 'left':
					tooltipObj.css('right', '100%');
					break;
				case 'right':
					tooltipObj.css('left', '100%');
					break;
				default:
					console.log('Error. Wrong position parameter.')
			}
		}


	var Constructor = function(options) {
		var position = this.css('position');

		options = $.extend(defaultOptions, options);

		this.tooltipObj = this.tooltipObj || _createTooltipObj(options);

		if (position !== 'relative' || position !== 'absolute') {
			this.css('position', 'relative');
		}

		this.append(this.tooltipObj);

		this.on(options['event'], this, function(e) {
			$('.' + options.contentClassName, this).css('display', 'block');
			_onOpen.call(this, options, e);
		});

		return this;
	}

	if ( typeof define === 'function' && define.amd ) {
		define( 'tooltip', ['jquery'], function () { $.fn.tooltip = Constructor; } );
	} else {
		$.fn.tooltip = Constructor;
	}

})();