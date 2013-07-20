jQuery(document).ready(function() {
	
	$('.successMessage, .successMessage2').fadeOut(0);
	
	// Anything Slider
	jQuery('#slider ul').anythingSlider({
		width : 800,          // Override the default CSS width
		height: 260,
		delay: 3000,
		animationTime: 1300,
		stopAtEnd: false,
		resumeOnVideoEnd: true,
		autoPlay: true,
		buildNavigation: false,
		hashTags: false, 
		easing: 'easeInQuad'
	});	
	
	/* Anything Slider Navigation
    --------------------------------------------------------------------- */
	var q = ["#prev-button", "#next-button", ".arrow", ".forward", ".back"];
	var buttons = q.join(", ");
	
	jQuery(".featured").hover( function() {
		jQuery(buttons).stop().show()
	}).mouseleave( function() {
		jQuery(buttons).stop().hide()
	});
	
	/* Scroll Functions (Navigation)
    --------------------------------------------------------------------- */
	jQuery('#navigation').localScroll();
	jQuery('#navigation li a').click( function () {
		jQuery('#navigation li a').removeClass("active");
		jQuery(this).addClass("active");
	});
	
	jQuery('#logo').click(function(){ 		
		jQuery('#navigation li a').removeClass("active");
		jQuery('#navigation li:first a').addClass("active");
		jQuery('html, body').animate({scrollTop:0},2000);
		
	});
	
	jQuery('.upArrow').click(function(){
		jQuery('#navigation li a').removeClass("active");
		jQuery('#navigation li:first a').addClass("active");
		jQuery('html, body').animate({scrollTop: 0},2000);
	});
	
	/* Carousel
	------------------------------------------------------------------*/
		 $('#foo1').carouFredSel({
					auto: {
						pauseOnHover: 'resume',
						pauseDuration: 4000,
						onPauseStart: function( percentage, duration ) {
							$(this).trigger( 'configuration', ['width', function( value ) { 
								$('#timer1').stop().animate({
									width: value
								}, {
									duration: duration,
									easing: 'easeInQuad'
								});
							}]);
						},
						onPauseEnd: function( percentage, duration ) {
							$('#timer1').stop().width( 0 );
						},
						onPausePause: function( percentage, duration ) {
							$('#timer1').stop();
						}
					}, 
					scroll : {
						duration: 1000}
				});

	/* Elements wrapper
     --------------------------------------------------------------------- */
	// Add wrapper to buttons, form submits and pager elements
    $( ".button,.button-s,.button-l,.button-xl, .boxes a, .post-more-link,input[type=submit],input[type=reset],input[type=button],").not("#submit2, #submit, .sloganBtn").wrap("<div class='button-wrapper' />");
	
	// Animate Social Container & Navigation
	jQuery(document).ready(function(){
		effects = {queue:true, duration:1500, easing: 'easeInOutExpo'};
		effects2 = {queue:true, duration:1500, easing: 'easeInOutExpo'};
		
		jQuery('#navigation li:first a').addClass("active");
		
		jQuery('#navigation').animate({
    	left: -3000}, 0);
		
		jQuery('#navigation').animate({
    	left: 0}, effects2);
		
		jQuery('.socialContainer').animate({
    	left: 30}, effects);
		
		});
		
	//Pretty Photo
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: false});
		
	// Portfolio Hover
	jQuery(document).ready(function(){
		jQuery('.overlay').hide();
	});
 	jQuery('ul.portfolio-thumbs li').hover(function(){
		effects = {queue:true, duration:500, easing: 'easeInOutExpo'};  
        jQuery(".overlay", this).fadeIn(effects);  
     	}, function() {  
        jQuery(".overlay", this).fadeOut(effects);
		  
   		});
		
	// Infield Text (Input)
	jQuery('input[type=text],input[type=search],input[type=email],textarea').click(
	function () {
  if (this.value == this.defaultValue) {
   this.value = '';
  }
 });
 jQuery('input[type=text],input[type=search],input[type=email],textarea').blur(

 function () {
  if (this.value == '') {
   this.value = this.defaultValue;
  }
 });
		 
    jQuery('#posts-navigation a').live('click', function(e){
    e.preventDefault();
    var link = jQuery(this).attr('href');
    var height = jQuery('#ajax-container').height();
    jQuery('#blog-page').css('height', 'auto');
    jQuery('#ajax-container').fadeOut(500).load(link + ' #ajax-inner', function(){ jQuery('#ajax-container').fadeIn(500); });
	$(".button").wrap("<div class='button-wrapper' />");
	});

/*  Newsletter Processing */  
  $('#submit2').click( function() {
		var mailo = $('#mailo').val();	
		var news   = $('#news').val();
		
	
	var dataString = '&mailo='+ mailo + '&news=' + news;  
	
	$.ajax({
    type: "POST",
    url: "wp-content/themes/BoxOne_Theme/newsletter.php",
    data: dataString,
    success: function() {
	var hght = $(window).height();
	var wdth = $(window).width();
	var msg1h = $('.successMessage').height();
	var msg1w = $('.successMessage').width();
	var msg2w = $('.successMessage').width();
	
	var hghtR1 = (hght-msg1h)/2;
	var wdthR1 = (wdth-msg1w)/2;
	
	
	$('.successMessage').css('top',hghtR1-25+'px');
	$('.successMessage').css('left', wdthR1+'px');
	$('.successMessage').fadeIn().delay(5000).fadeOut('slow');
    }
  });
  
  return false;
		
  });	
		
	
/*  Contact Form Processing */  
  $('#submit1').click( function() {
		var email = $('#email').val();	
		var name   = $('#name').val();
		var message = $('#message').val();
		var mailo = $('#mailo').val();
		
		var dataString = '&mailo='+ mailo + '&name=' + name + '&message=' + message + '&email=' + email;
		
			$.ajax({
			type: "POST",
			url: "wp-content/themes/BoxOne_Theme/contactform.php",
			data: dataString,
			success: function() {
			var hght = $(window).height();
			var wdth = $(window).width();
			var msg1h = $('.successMessage').height();
			var msg2w = $('.successMessage2').width();
			
			var hghtR1 = (hght-msg1h)/2;
			var wdthR1 = (wdth-msg2w)/2;
			
			$('.successMessage2').css('top',hghtR1-25+'px');
			$('.successMessage2').css('left', wdthR1+'px');
			$('.successMessage2').fadeIn().delay(5000).fadeOut('slow');
			}
		});
  
  return false;
		

  });
        

});	//END of jQuery