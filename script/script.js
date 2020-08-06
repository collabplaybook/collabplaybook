
$('.resource-category-wrapper').on("click", function () {
	$(this).find(".resource-category").toggleClass('category-active');
	$(this).toggleClass('auto-height');
});


$('.toggle-labels').on("click", function () {
	$(".resource-category").toggleClass('category-active');
	$('.resource-category-wrapper').toggleClass('auto-height');
});



$('.resource-checkboxes').change(function() {

   var myID = $(this).attr("id");



		$('.resource.'+myID).toggle();


});