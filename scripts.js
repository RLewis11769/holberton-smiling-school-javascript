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

let singleCarousel = {
	autoplay: true,
	infinite: true,
	arrows: true,
	prevArrow: `<img class="a-left control-c slick-prev"src="images/arrow_white_left.png" aria-hidden="true" alt="next">
		<span class="sr-only">Previous</span>`,
	nextArrow: `<img class="a-left control-c slick-next" src="images/arrow_white_right.png" aria-hidden="true" alt="next">
		<span class="sr-only">Previous</span>`
}

function addQuote(data) {
	$('.quotes').prepend(`<div>
		<div class="row align-items-center justify-content-center">
			<div class="col-md-4 text-center">
				<img class="rounded-circle m-5 w-50" src="${data['pic_url']}" alt="">
			</div>
			<div class="col-md-5">
				<div class="card-body">
					<h1 class="lead">${data.text}</h1>
					<p>
						<span class="font-weight-bold">${data.name}</span>
						<br><span class="font-italic">${data.title}</span>
					</p>
				</div>
			</div>
		</div>
	</div>`);
}

function loadTestimonials() {
	url = 'https://smileschool-api.hbtn.info/quotes';
	$.get(url, function (data) {
		data.forEach(addQuote);
		$('.quotes').slick(singleCarousel);
	}).fail(function () {
		console.log('uh oh');
	})
}

$(document).ready(function () {
	$('#popular').slick(responsiveCarousel);
	$('#latest').slick(responsiveCarousel);

	loadTestimonials();
	console.log('done')
});
