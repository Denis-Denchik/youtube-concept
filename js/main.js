document.querySelectorAll('.channel').forEach(n => {
	const swiper = new Swiper('.channel-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,

		// Navigation arrows
		navigation: {
			nextEl: '.channel-button-next',
			prevEl: '.channel-button-prev',
		},
	});
});
document.querySelectorAll('.recommended').forEach(n => {
	const swiper = new Swiper('.recommended-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,

		// Navigation arrows
		navigation: {
			nextEl: '.recommended-button-next',
			prevEl: '.recommended-button-prev',
		},
	});
});
document.querySelectorAll('.other-channel').forEach(n => {
	const swiper = new Swiper('.other-channel-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,

		// Navigation arrows
		navigation: {
			nextEl: '.other-channel-button-next',
			prevEl: '.other-channel-button-prev',
		},
	});
});

