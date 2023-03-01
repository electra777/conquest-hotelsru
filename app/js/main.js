document.addEventListener('DOMContentLoaded', () => {
	let qualitySlider = new Swiper('.js-quality-slider', {
		pagination: {
			el: '.swiper-pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return `0${current}`;
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
