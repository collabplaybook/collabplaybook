
$('.resource-category-wrapper').on("click", function () {
	$(this).find(".resource-category").toggleClass('category-active');
	$(this).toggleClass('auto-height');
});
