head.ready(function() {

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

	//map
	ymaps.ready(init);
	var myMap,
		myPlacemark;

	function init(){
		myMap = new ymaps.Map ("map", {
			center: [55.706000, 37.670858],
			zoom: 16,
		});
		myPlacemark = new ymaps.Placemark([55.704439, 37.678708], {
			hintContent: 'Адрес'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/marker.png',
			iconImageSize: [58, 81],
			iconImageOffset: [-20, -80]
		});
		myMap.controls
			.remove('zoomControl')
			.remove('mapTools')
			.remove('smallMapDefaultSet')
			.remove('trafficControl')
			.remove('largeMapDefaultSet')
			.remove('routeEditor')
			.remove('typeSelector');
		myMap.geoObjects.add(myPlacemark);
	};

});