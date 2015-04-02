// -- global js here
 // listen for scrollspy events on the navigation element itself
  // $('#myScrollspy').on('activate.bs.scrollspy', function() {
  //   console.log('scroll!!')
  // });
	// $('#gen-toc-container').prepend($('#myScrollspy .nav-title').html());
    $('body').scrollspy({ 'target': '#myScrollspy', 'offset': 190 });

  // listen for scrollspy events on the navigation element itself
  $('#myScrollspy').on('activate.bs.scrollspy', function() {
    console.log('scroll!!')
    // $('.expanded').removeClass('expanded');
    var selected = $('#myScrollspy .nav').children('li.active');
    if (selected.children('ul').length > 0 )
    {
   		selected.addClass('expanded');
    	if (selected.children('ul').children('li').hasClass('active'))
    	{
    		selected.removeClass('active');
    		selected.children('ul').show();
    	}
    	else
    		 $('#myScrollspy .nav').children('li').children('ul').hide();
    	console.log(selected.text() + " have children");
    }
    else
    {
    	console.log(selected.text() + "I dont have children");
    }
    if (!$('.closed').children('li').hasClass('active'))
    {
    	$('.closed').hide();
    	$('.expanded').removeClass('expanded');
    }
  });

// $('.navbar-toggle').on('click', function() {
// 	if ('.navbar-collapse').hasClass('collapse')
// 	{
// 		    	 $('#sticky-nav').css('top', $('.navbar-collapse').height());

//     }
//     else
//     {
//     	    	$('#sticky-nav').css('top', '120px');

//     }
// });


  // if ($('#navbar').hasClass('in'))
  // {
  // 	$('#sticky-nav').css('top', '150px');
  // }
  // else
  // 	 $('#sticky-nav').css('top', '121px');
