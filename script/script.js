
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


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
