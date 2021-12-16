$(function () {
	var historyNavi = $('aside'),
		historyButton = historyNavi.find('button');

	historyButton.click(function () {
		historyNavi.toggleClass('open');
		historyNavi.hasClass('open') == true ? historyButton.html('close') : historyButton.html('open');
	});
});
