/*
 * jQuery File Upload Plugin JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $, window */

$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/'
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );
    
    var api_password = "0fe9e58a82c7b54381b480fa1d4a986389b2c8deb81e11461d9fa80b61219bb4";
		  //var url = result.files[0].url;
		  var project_id = '8xzq70espm';
		  var requestData = jQuery.param({
			api_password: api_password,
			file: $('#fileupload')[0],
			project_id: project_id
		  });

		  $.ajax({
			type:'POST',
			url: 'https://upload.wistia.com',
			data: requestData,
			contentType: 'application/x-www-form-urlencoded',
			cache: false,
			processData: false,
			success:function(data) {
			  console.log('data',data);
			  
			  alert('Success!');
			},
			error: function(data) {
			  console.log('data',data);
			  alert('Error');
			}
		  });

    if (window.location.hostname === 'blueimp.github.io') {
        // Demo settings:
        $('#fileupload').fileupload('option', {
            url: '//jquery-file-upload.appspot.com/',
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            maxFileSize: 999000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
        });
        // Upload server status check for browsers with CORS support:
        if ($.support.cors) {
            $.ajax({
                url: '//jquery-file-upload.appspot.com/',
                type: 'HEAD'
            }).fail(function () {
                $('<div class="alert alert-danger"/>')
                    .text('Upload server currently unavailable - ' +
                            new Date())
                    .appendTo('#fileupload');
            });
        }
    } else {
        // Load existing files:
         //alert('ok');
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            
             $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
          console.log('result',result);   
          //alert(result);
         /* var api_password = "0fe9e58a82c7b54381b480fa1d4a986389b2c8deb81e11461d9fa80b61219bb4";
		  var url = result.files[0].url;
		  var project_id = '8xzq70espm';
		  var requestData = jQuery.param({
			api_password: api_password,
			url: url,
			project_id: project_id
		  });

		  $.ajax({
			type:'POST',
			url: 'https://upload.wistia.com',
			data: requestData,
			contentType: 'application/x-www-form-urlencoded',
			cache: false,
			processData: false,
			success:function(data) {
			  console.log('data',data);
			  
			  alert('Success!');
			},
			error: function(data) {
			  console.log('data',data);
			  alert('Error');
			}
		  }); */
                
        });
        
        /*var api_password = "0fe9e58a82c7b54381b480fa1d4a986389b2c8deb81e11461d9fa80b61219bb4";
		 // var url = result.files[0].url;
		  var project_id = '8xzq70espm';
		  var requestData = jQuery.param({
			api_password: api_password,
			file:$('#fileupload')[0],
			project_id: project_id
		  });

		  $.ajax({
			type:'POST',
			url: 'https://upload.wistia.com',
			data: requestData,
			contentType: 'application/x-www-form-urlencoded',
			cache: false,
			processData: false,
			success:function(data) {
			  console.log('data',data);
			 
			  //alert('Success!');
			},
			error: function(data) {
			  console.log('data',data);
			  //alert('Error');
			}
		  });
        */
    }

});
