(function() {
	"use strict";
	var doc, wnd, 
			container, params, closeSection, toggleTrigger;
	doc = document;
	wnd = window;

	params = {
		accordionContainer: ".site-nav__top-item_drop",
		accordionTrigger: ".js-accordion-trigger",
		activeCls: "active",
	}
	container = doc.querySelector(params.accordionContainer);

	if (container) {
		closeSection = function(el) {
			$(el).removeClass(params.activeCls);
			$(el).siblings().removeClass(params.activeCls);
		}

		toggleTrigger = function() {
			var windowWidth = wnd.innerWidth,
					el = $(".site-nav__top-item_drop .site-nav__top-link");

			windowWidth <= 1160
				? el.addClass(params.accordionTrigger.slice(1)) // remove dot
				: el.removeClass(params.accordionTrigger.slice(1));
		}
		toggleTrigger();

		$(params.accordionContainer).on("click", params.accordionTrigger, function(e) {
			var parent = $(this).parent();

			if ($(parent).is("." + params.activeCls)) {
				closeSection(parent);
			} else {
				closeSection(parent);
				$(parent).addClass(params.activeCls);
			}
			e.preventDefault();
		});

		wnd.addEventListener("resize", toggleTrigger);
	}
}());