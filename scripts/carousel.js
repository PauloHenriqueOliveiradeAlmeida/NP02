const carousel = document.getElementById("carousel");


	setInterval(() => {
		if ((carousel.scrollLeft + (carousel.scrollWidth / 2)) >= (carousel.scrollWidth)) {
			carousel.scroll({left: 0});
		}
		else {
			carousel.scroll({left: carousel.scrollLeft + (carousel.scrollWidth / 4)});
		}
	}, 2000);
