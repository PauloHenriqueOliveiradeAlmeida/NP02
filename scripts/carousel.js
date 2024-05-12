const carousel = document.getElementById("carousel");


	setInterval(() => {
		if (carousel.scrollLeft >= 1314) {
			carousel.scroll({left: 0});
		}
		else {
			carousel.scroll({left: carousel.scrollLeft + (carousel.scrollWidth / 3)});
		}
	}, 2000);
