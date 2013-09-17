/*
 * FileFive on GitHub:
 * https://github.com/JDBurnZ/jquery-filefive
  *
 * FileFive by Joshua D. Burns is licensed under the Creative Commons
 * Attribution 3.0 Unported License. To view a copy of this license, visit:
 * http://creativecommons.org/licenses/by/3.0/
 *
 */

(function($) {
	// Define the globl function which is callable via $.filefive(selector).
	$.fn.filefive = function() {
		// Must return using each() to maintain jQuery object chaining.
		return this.each(function() {
			$.filefive(this);
		});
	}

	$.filefive = function(selector) {
		// Filter all non "file"-type inputs and elements.
		var $selector = $(selector).filter('input[type="file"]');

		// Add the "files()" function to the $selector.
		$selector.files = function() {
			var $selector = $(this);

			var file_objects = [];

			// Iterate over each selector, combining files into a
			// single list.
			$.each($selector, function(offset, file_input) {
				// Iterate over each file input's file objects,
				// extending each file object's functionality.
				$.each(file_input.files, function(offset, file_object) {

					// Determine the media type of file selected.
					if(file_object.type.match(/image.*/)) {
						file_object.media = 'image';
					} else if(file_object.type.match(/video.*/)) {
						file_object.media = 'video';
					} else if(file_object.type.match(/audio.*/)) {
						file_object.media = 'audio';
					} else {
						file_object.media = 'other';
					}

					/*
					 * TODO:
					 * - Add support for Video
					 * - Add support for Sound
					 * - Determine if there are any other media types
					 *   this plugin should support / be able to
					 *   generate objects for.
					 */

					file_object.image = function() {
						// Ensure the file object is an image.
						if(!file_object.type.match(/image.*/)) {
							return false;
						}

						var image_object = document.createElement('img');
						image_object.classList.add('obj');
						image_object.file = file_object;

						var file_reader = new FileReader();
						file_reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(image_object);
						file_reader.readAsDataURL(file_object);

						return $(image_object);
					}

					file_objects.push(file_object);
				});
			});

			return $(file_objects);
		}

		return $selector;
	}
})(jQuery);
