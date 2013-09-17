
                                    FileFive                                    

                        Version 0.1.0 Release Canidate 1       

================================================================================

 LICENSE    
--------------------------------------------------------------------------------                                
FileFive by Joshua D. Burns is licensed under the Creative Commons Attribution
3.0 Unported License. To view a copy of this license, please visit:
http://creativecommons.org/licenses/by/3.0/

================================================================================

 SOURCE CODE   
--------------------------------------------------------------------------------                                 
FileFive source code, documentation and examples are available on GitHub at:
https://www.github.com/JDBurnZ/jquery-filefive

================================================================================

 DESCRIPTION
--------------------------------------------------------------------------------  
   
FileFive is a jQuery plug-in for easily and efficiently dealing with HTML 5 file
objects from reading file sizes and file names, to generating thumbnails for
display within the HTML DOM.

================================================================================

 QUICK-REFERENCE
--------------------------------------------------------------------------------  

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

Generate an <img> element, for a file, attaching it to the <body> of the DOM.
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
