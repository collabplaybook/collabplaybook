


$('.resource-checkboxes').change(function() {
   var myID = $(this).attr("id");
		$('.resource.'+myID).toggle();

});


function scroll_to_top() {
	var scroll_up_button= $('.scroll-up')
    var window_top= $(window).scrollTop();
    var table_contents_bottom= $('.table-of-contents').offset().top;

    if (window_top > table_contents_bottom) {
        scroll_up_button.addClass('show');
    } else {
        scroll_up_button.removeClass('show');
    }
}

$(function () {
    $(window).scroll(scroll_to_top);
    scroll_to_top();
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
