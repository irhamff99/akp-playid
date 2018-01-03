$(document).ready(funcion(){
	$('.li').click(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
});

$(document).on('click', 'li a[href^="#"]', funcion(e)) {
	var id = $(this).attr('href');

	var $id = $(id);
	if ($id.length === 0) {
		return;
	}
	e.preventDefault();
	var pos = $id.offset().top
	$('body, html').animate({scrollTop: pos});
});
