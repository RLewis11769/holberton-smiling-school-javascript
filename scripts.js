let responsiveCarousel = {
	autoplay: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: `<img class="a-left control-c slick-prev"src="images/arrow_black_left.png" aria-hidden="true" alt="next">
		<span class="sr-only">Previous</span>`,
	nextArrow: `<img class="a-left control-c slick-next" src="images/arrow_black_right.png" aria-hidden="true" alt="next">
		<span class="sr-only">Previous</span>`,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

$(document).ready(function () {
	$('.responsive').slick(responsiveCarousel);
});
