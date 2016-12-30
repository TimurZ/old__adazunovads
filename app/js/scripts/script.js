(function() {
	"use strict";

	function mobMenu() {
		var elems, activeCls, removeActiveClass;
		elems = elems = $(".js-mob-menu, .overlay");

		if (elems.length) {
			activeCls = "mob-menu-active";
			removeActiveClass = function() {
				var wWidth = window.innerWidth;

				if (wWidth >= 1160) {
					$("body").removeClass(activeCls);
				}
			}

			elems.on("click", function() {
				$("body").toggleClass(activeCls);
			});

			window.addEventListener("resize", removeActiveClass);
		}
	}
	mobMenu();

	function galleryImage() {
		var images, thumbs;

		images = $(".js-gallery-images");
		thumbs = $(".js-gallery-thumbs");

		if (images.length) {
			$(".js-gallery-thumb").on("click", function() {
				var attr, target, cur;

				cur = $(this);
				cur.addClass("active").siblings().removeClass("active");
				attr = cur.attr("data-img");
				target = images.find("[data-img="+attr+"]");

				target.addClass("active").siblings().removeClass("active");
			});
		}
	}
	galleryImage();

	function datePickerInline() {
		var el;
		el = $(".datepickerFrame");

		if (el.length) {
			el.datepicker({
					showOtherMonths: true,
					selectOtherMonths: false
				}
				// $.datepicker.regional["lv"]
			);
		}
	}
	datePickerInline();

	function datePicker() {
		var elFrom, elTo;

		elFrom = $(".js-date-from");
		elTo = $(".js-date-to");

		if (elFrom.length || elTo.length) {
			elFrom.datepicker({
				showOtherMonths: true,
				showOn: "both",
				buttonImage: "images/datepicker-ico.png",
				buttonImageOnly: true,
				buttonText: "Select date"
			});
			elTo.datepicker({
				showOtherMonths: true,
				showOn: "both",
				buttonImage: "images/datepicker-ico.png",
				buttonImageOnly: true,
				buttonText: "Select date"
			});

			elFrom.datepicker().datepicker("setDate", new Date());
			elTo.datepicker().datepicker("setDate", new Date());
		}
	}
	datePicker();

	function fancybox() {
		var el;
		el = $(".fancybox");

		if (el.length) {
			el.fancybox({
				openEffect: "none",
				closeEffect: "none",
				nextEffect: "fade",
				prevEffect: "fade"
			});
		}
	}
	fancybox();

	function fancySelect() {
		var el, fncSlct;
		el = $(".js-custom-select");

		if (el.length) {
			el.fancySelect();

			// http://stackoverflow.com/questions/7600454/how-to-prevent-page-scrolling-when-scrolling-a-div-element
			// disable page scroll on options:hover
			fncSlct = $('.fancy-select .options');
			fncSlct.on( 'mousewheel DOMMouseScroll', function ( e ) {
			  var e0 = e.originalEvent,
			      delta = e0.wheelDelta || -e0.detail;

			  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 50;
			  e.preventDefault();
			});
		}
	}
	fancySelect();

	function stickyFooter() {
		var footer;
		footer = $(".js-footer");

		if (footer.length) {
			var footerH, page;
			page = $(".js-full-height");
			footerH = footer.height();

			page.css({
				"min-height": "100%",
				"padding-bottom": footerH
			});
			footer.css({
				"margin-top": -footerH
			});
		}
	}
	stickyFooter();
}());