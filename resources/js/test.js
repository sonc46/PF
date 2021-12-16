$(function () {
	var testbedbanner = $('.koradtestbedAbout a'),
		windowWidth = $(window).width(),
		testbedbannerImg = testbedbanner.children('img');

	if (windowWidth > 1100) {
		testbedbanner.hover(
			function () {
				testbedbanner.not($(this).css('background', 'transparent')).css('background', '#111');
				testbedbannerImg
					.not(
						$(this).children('img').css({
							opacity: '1',
							filter: 'none',
						})
					)
					.css({
						opacity: '0.2',
						filter: 'grayscale(100%)',
					});
			},
			function () {
				testbedbanner.css('background', 'transparent');
				testbedbannerImg.css({
					opacity: '1',
					filter: 'none',
				});
			}
		);
	}
});
