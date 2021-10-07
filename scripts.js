let responsiveCarousel = {
	autoplay: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: `<img class="a-left control-c slick-prev" src="images/arrow_black_left.png" aria-hidden="true" alt="prev">`,
	nextArrow: `<img class="a-right control-c slick-next" src="images/arrow_black_right.png" aria-hidden="true" alt="next">`,
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
	prevArrow: `<img class="a-left control-c slick-prev" src="images/arrow_white_left.png" aria-hidden="true" alt="prev">`,
	nextArrow: `<img class="a-right control-c slick-next" src="images/arrow_white_right.png" aria-hidden="true" alt="next">`
}

function loadTestimonials() {
	// Query for data for testimonials section (single-item carousel found in multiple places)
	displayLoading(1, '.quotes');
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/quotes',
		success: (data)=> (data.forEach(addTestimonial)),
		error: (()=> console.log('Unable to load data')),
		complete: (()=> $('.quotes').slick(singleCarousel))
	});
	displayLoading(0, '.quotes');
}

function addTestimonial(data) {
	// Add html to .quotes div including dynamic data
	$('.quotes').prepend(`<div>
		<div class="row align-items-center justify-content-center">
			<div class="col-md-4 text-center">
				<img class="rounded-circle w-50 mx-auto" src="${data['pic_url']}" alt="">
			</div>
			<div class="col-md-6">
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

function loadTutorials(url, id) {
	// Query for data for popular or latest tutorials video section (multi-item carousel)
	displayLoading(1, `.${id}`);
	$.ajax({
		type: 'GET',
		url: url,
		success: (videos)=> {
			// for each tutorial, add html data and then add rating stars
			for (let video of videos) {
				addTutorial(video, id);
				includeStars(video, id);
			}
		},
		error: (()=> console.log('Unable to load data')),
		complete: (()=> $(`#${id}`).slick(responsiveCarousel))
	});
	displayLoading(0, `.${id}`);
}

function addTutorial (data, id) {
	// Add html to #popular or #latest div including dynamic data
	$(`#${id}`).prepend(`<div class="mx-2" id="${id}${data.id}">
			<img class="card-img-top" src="${data["thumb_url"]}" alt="">
			<div class="card-body mx-0">
				<h1 class="card-title lead font-weight-bold">${data.title}</h1>
				<p class="card-text text-secondary">${data["sub-title"]}</p>
				<div class="row">
					<img class="rounded-circle ml-2" src="${data["author_pic_url"]}" height="35px" width="35px" alt="">
					<p class="ml-3 mt-1 purple">${data.author}</p>
				</div>
				<div class="row align-items-center justify-content-between px-4">
					<div class="row" id="star${data.id}"></div>
					<p class="purple ml-2 pt-3">${data.duration}</p>
				</div>
			</div>
		</div>`);
}

function includeStars (data, id) {
	// Add star rating to video tutorials
	for (let on = 0; on < data.star; on++) {
		$(`#${id} #star${data.id}`).append('<img src="images/star_on.png" height="25px" width="25px" alt="">');
	}
	for (let off = 5; off > data.star; off--) {
		$(`#${id} #star${data.id}`).append('<img src="images/star_off.png" height="25px" width="25px" alt="">');
	}
}

function displayLoading(loading, tag) {
	// Adds spinner to indicate loading while API is working
	$(tag).empty();
	if (loading) {
		$(tag).wrap('<div class="loader"></div>');
	} else {
		$(tag).unwrap();
	}
}

$(document).ready(function () {
	displayLoading(1, 'body');
	loadTestimonials();
	loadTutorials('https://smileschool-api.hbtn.info/popular-tutorials', 'popular');
	loadTutorials('https://smileschool-api.hbtn.info/latest-videos', 'latest');
	displayLoading(0, 'body');
});
