$(document).ready(function() {
	$("#hide").on('click', function() {
		$(".colleen").css("visibility", "hidden");
		$(".umsi").attr("align", "left");

	})
	$("#show").on('click', function() {
		$(".colleen").css("visibility", "visible");
		$(".umsi").attr("align", "right");

	})
 });