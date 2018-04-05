$(document).ready(() => {


	// $("image-container").mouseover(function() {
	// 	$(".image-container").attr("src", "../Portfolio/assets/bluebackground.png");
	// });

	$(".image-container").on('focus mouseover', function () {
		$(".image-container").attr("src", "../Portfolio/assets/bluebackground.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$(".image-container").on('focus mouseout', function () {
		$(".image-container").attr("src", "../Portfolio/assets/prudentialcover.jpg");
	})




	$("#born").on('focus mouseover', function () {
		$("#born").attr("src", "../Portfolio/assets/timeline/1996face.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#born").on('focus mouseout', function () {
		$("#born").attr("src", "../Portfolio/assets/timeline/1996.png");
	})


	$("#elementary").on('focus mouseover', function () {
		$("#elementary").attr("src", "../Portfolio/assets/timeline/2005sara.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#elementary").on('focus mouseout', function () {
		$("#elementary").attr("src", "../Portfolio/assets/timeline/2005.png");
	})



	$("#20151").on('focus mouseover', function () {
		$("#20151").attr("src", "../Portfolio/assets/timeline/20151.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#20151").on('focus mouseout', function () {
		$("#20151").attr("src", "../Portfolio/assets/timeline/2015.png");
	})


	$("#2016wire").on('focus mouseover', function () {
		$("#2016wire").attr("src", "../Portfolio/assets/timeline/2016wire.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#2016wire").on('focus mouseout', function () {
		$("#2016wire").attr("src", "../Portfolio/assets/timeline/2016.png");
	})


	$("#umsi").on('focus mouseover', function () {
		$("#umsi").attr("src", "../Portfolio/assets/timeline/umsi.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#umsi").on('focus mouseout', function () {
		$("#umsi").attr("src", "../Portfolio/assets/timeline/2016.png");
	})




	$("#greatwall").on('focus mouseover', function () {
		$("#greatwall").attr("src", "../Portfolio/assets/timeline/greatwall.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#greatwall").on('focus mouseout', function () {
		$("#greatwall").attr("src", "../Portfolio/assets/timeline/2017.png");
	})



	$("#pru").on('focus mouseover', function () {
		$("#pru").attr("src", "../Portfolio/assets/timeline/pru.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#pru").on('focus mouseout', function () {
		$("#pru").attr("src", "../Portfolio/assets/timeline/2017.png");
	})



	$("#506").on('focus mouseover', function () {
		$("#506").attr("src", "../Portfolio/assets/timeline/506.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#506").on('focus mouseout', function () {
		$("#506").attr("src", "../Portfolio/assets/timeline/2017.png");
	})



	$("#apple").on('focus mouseover', function () {
		$("#apple").attr("src", "../Portfolio/assets/timeline/apple.png");
	
	  // $(this).attr('src', $(this).data("hover"));
	  // $("image-container").text("What I did");
	})


	$("#apple").on('focus mouseout', function () {
		$("#apple").attr("src", "../Portfolio/assets/timeline/2018.png");
	})

	 $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });

























	// $(".image-container").on('blur mouseleave', function () {
	// 	$(this).attr('src', $(this).data("src"));

	// })
	// $(".image-container").mouseout(function () {
	//   $(this).attr('src', $(this).data("src"));
	// });
	// $("image-container").mouseover(function() {
	// 	$(".image-container").attr("src", "../Portfolio/assets/bluebackground.png");
	// });
	

 })



function myFunction() {
    var mynav = document.getElementById("myTopnav");
    if (mynav.className === "topnav") {
        mynav.className += " responsive";
    } else {
        mynav.className = "topnav";
    }
}


  