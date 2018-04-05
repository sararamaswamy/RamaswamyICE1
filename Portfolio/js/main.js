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


  