head.ready(function() {


	//gallery
	var gallery = $('.js-gallery'),
		gallery_slider_all = gallery.find('.slider');
	gallery.each(function () {
		var gallery_this = $(this),
			gallery_slider = gallery_this.find('.slider'),
			gallery_list = gallery_slider.find('.slider__wrap'),
			gallery_prev = gallery_slider.find('.slider__prev'),
			gallery_next = gallery_slider.find('.slider__next'),
			gallery_item = gallery_slider.find('.slider__item'),
			gallery_close = gallery_slider.find('.slider__close'),
			gallery_trigger = gallery_this.find('.items .item');
		gallery_trigger.on('click', function () {
			if (!gallery_this.hasClass('is-visible')) {
				gallery.removeClass('is-visible');
				gallery_slider_all.slideUp();
				gallery_this.addClass('is-visible');
				gallery_slider.slideDown(400, function () {
					var gallery_top = gallery_this.offset().top;
					$('html, body').animate({
						scrollTop: gallery_top
					}, 400);
				});
			};
			var index = $(this).index();
			gallery_list.cycle('goto', index);
		});
		if (gallery.length) {
			gallery_list.cycle({
				fx: 'scrollHorz',
				timeout: 0,
				slides: gallery_item,
				prev: gallery_prev,
				next: gallery_next
			});
		};
		gallery_close.on('click', function () {
			gallery_slider.removeClass('is-visible');
			gallery_slider.slideUp();
		});
	});
	
	//slideshow
	$(".slideshow").cycle({
		fx: 'carousel',
		timeout: 0,
		carouselVisible: 3,
		slides: '.wat__item',
		next: '.wat__next',
		prev: '.wat__prev',
		allowWrap: false
	});

	// scrollTop
	$(".motto a, .wat__item, .js-nav-link").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top + 20
		}, 600);
		return false;
	});

	//tabs
	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
			// tab_cont.hide();
			tab_item.first().addClass("is-active");
			$(this).parents(".js-tab-group").find(".js-tab1").addClass("is-active");
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				tab_item.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.removeClass('is-active')
				$(this).parents(".js-tab-group").find("."+index).addClass("is-active");
				return false;
			});
		});
	}
	tab();
});