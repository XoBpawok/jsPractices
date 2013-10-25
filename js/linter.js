(function($) {

	var defaultOptions = {
		'message': 'linter default message',
		'position': 'bottom',
		'linterClass': 'linterClass',
		'width': '200px',
		'heigth': '20px',

		'event': 'click',

		'onOpen': function() {
			console.log('linter opened');
		},
		'onClose': function() {
			console.log('linter closed');
		}
	}

	function _createLinter (options) {
		return $('<div>', {
			'style': {
				'position': 'absolute',
				'display': 'none'
			},
			'class': options.linterClass,
			
		})
	}

	$.fn.linter = function(options) {
		var position = this.css('position'),
			linterObj;

		if (options === undefined) {
			options = options || defaultOptions;
		} else {
			options = $.extend(defaultOptions, options);
		}

		if (position !== 'relative' || position !== 'absolute') {
			this.css('position', 'relative');
			linterObj = _createLinter(options);
		} else {

		}
		
		
		



		return this;
	}
})(jQuery);