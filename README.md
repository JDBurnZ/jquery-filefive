FileFive
========

Current Version: 0.1.0 Development

FileFive is a jQuery plug-in for easily and efficiently dealing with HTML 5 file
objects from reading file sizes and file names, to generating thumbnails for
display within the HTML DOM.

Please note: FileFive is under active development so as features are added and
scopes are more clearly defined, methods and calls may be subject to change.
Therefore, future versions under the development branch may not be sutable as
drop-in replacements to older versions.

License
-------
FileFive by Joshua D. Burns is licensed under the Creative Commons Attribution
3.0 Unported License. To view a copy of this license, please visit:
http://creativecommons.org/licenses/by/3.0/

Source Code
-----------
FileFive source code, documentation and examples are available on GitHub at:
https://www.github.com/JDBurnZ/jquery-filefive

Compatibility
-------------
100%
* Mozilla Firefox 23.1.0
* Mozilla Firefox 24.0
* Google Chrome 29.0.1547.66 m
* Microsoft Internet Explorer 10.0.7

This library has not yet been tested in Safari, Opera, any mobile operating
system/mobile browser, or any previous versions of Internet Explorer.

Known Issues
------------

* Needs to be tested in a larger array of browsers.
* Currently no fallback for non-HTML 5 browsers.

To Do
-----

Features to be included in future releases.
* Video object support
* Sound object support
* Drag'n'drop files from file system
* Drag'n'drop web resources (images, urls, text, etc)
* Easy AJAX file uploading

Quick Reference
---------------

Grab the file input we'll be interfacing with:

	var $file_input = $('#file-input');

Detect when files have been selected:

	$(document.body).on('change', $file_input, function(event) {
		var $file_input = $(this);
		// code here...
	});

Grab the files selected by the file input:

	var $files = $file_input.files();

Iterate over the files selected by the file input:

	$.each($files, function(offset, file) {
		// code here...
	});

Grab the size of a file:

	var size = file.size;

Grab the filename of a file:

	var filename = file.name;

Grab the mime type of a file:

	var mimetype = file.type;

Grab the media type of a file:

	var mediatype = file.media;

Generate an "img" element, for a file, attaching it to the "body" of the DOM.

	var $img = file.image();
	$img.appendTo('body');

Full working example:

	// Grab the file input we'll be interfacing with:
	var $file_input = $('#file-input');

	// Detect when files have been selected:
	$(document.body).on('change', $file_input, function(event) {
		var $file_input = $(this);

		// Grab the files selected by the file input:
		var $files = $file_input.files();

		// Iterate over the files selected by the file input:
		$.each($files, function(offset, file) {
			// Grab the size of a file:
			var size = file.size;

			// Grab the filename of a file:
			var filename = file.name;

			// Grab the mime type of a file:
			var mimetype = file.type;

			// Grab the media type of a file:
			var mediatype = file.media;

			// Generate an <img> element, for a file, attaching it to the
			// <body> of the DOM.
			var $img = file.image();
			$img.appendTo('body');
		});
	});
