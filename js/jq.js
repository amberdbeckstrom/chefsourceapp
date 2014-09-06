$(document).ready(function(){
    $(".searchbox").hide();
    // $(".searchbox").slideUp();
    $(".search").hide();

    
    
    $('.searchbtn').click(function(){
    	$(".searchbox").slideToggle();
  //   	toggleComposeHeight();
		// $(".searchbox").slideDown();
	});


    $('.searchbtn').click(function(){
		$( "input" ).slideDown( 465, function() {
    	$( this )
      		.filter( ".search" )
      		.focus();
  		})
    })

 //    $('.searchbtn').dblclick(function(){
 //    	toggleComposeHeight();
	// 	$(".searchbox").slideUp();
	// })

 //    $('.searchbtn').dblclick(function(){
	// 	$( "input" ).slideUp( 465, function() {
 //    	$( this )
 //      		.filter( ".search" )
 //      	.focus();
 //  		})
 //    })

     $(".slider, .recipe").click(function() {
            $('.searchbox').slideUp();
            $('.search').slideUp();
	  });

    $(document).keypress(function(e) {
  		if(e.which === 13) {
     		window.location.replace("searchres.html");
  		}
});
 


//  var toggleComposeHeight = function(){
// 	var compose = $('#toggle');
	
// 	if (compose.height() == 0){
// 		compose.height('50px');
// 		}else {
// 			compose.height('0px');
// 		}
// 	}

// var toggleInputHeight = function(){
// 	var compose = $('#toggle');
	
// 	if (compose.height() == 0){
// 		compose.height('30px');
// 		}else {
// 			compose.height('0px');
// 		}
// 	}

    

});