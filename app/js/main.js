document.addEventListener('DOMContentLoaded', () => {
	let qualitySlider = new Swiper('.js-quality-slider', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
