//slide 

let container = document.querySelector('.slide_container'),
	slides = document.querySelectorAll('.slides'),
	slideWidth = slides[0].clientWidth,
	slideCount = slides.length,
	currentIndex = 0,
	next_btn = document.querySelector('.next_btn'),
	prev_btn = document.querySelector('.prev_btn');

slides.forEach((item, index) => {
	item.style.left = `${slideWidth * index}px`;
});

const moveSlide = (index) => {
	container.style.left = `-${slideWidth * index}px`;

	currentIndex = index
}

next_btn.addEventListener('click', () => {
	if(currentIndex < slideCount - 1) {
		moveSlide(currentIndex + 1);
	} else {
		moveSlide(0);
	}
});

prev_btn.addEventListener('click', () => {
	if(!currentIndex == 0) {
		moveSlide(currentIndex - 1);
	} else {
		moveSlide(slideCount - 1);
	}
});

//fade-in-out 

let fadeImg = document.querySelectorAll('.fade_img'),
	fadeImgCount = fadeImg.length;
	pager = document.getElementById('pager');

for(let i = 1; i < fadeImgCount + 1; i++) {
	pager.innerHTML += `<span>${i}</span>`;
}

let pagerBtn = document.querySelectorAll('#pager > span');

const fadeInOut = (idx) => {
	fadeImg.forEach((item) => {
		item.style.display = 'none';
	});
	fadeImg[idx].style.display = 'block';
}

pagerBtn.forEach((item, index) => {
	pagerBtn[0].classList.add('on');
	item.addEventListener('click', () => {
		for(let i=0; i < pagerBtn.length; i++) {
			pagerBtn[i].classList.remove('on');
		}
		pagerBtn[index].classList.add('on');
		fadeInOut(index);
	});
})

//tap_menu 

let TapBtn = document.querySelectorAll('.notice_tap'),
	TapInfo = document.querySelectorAll('.main_notice_info');

TapBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		removeClass();
		TapBtn[index].classList.add('on');
		TapInfo[index].classList.add('on');
	});
});

function removeClass() {
	TapBtn.forEach((item) => {
		item.classList.remove('on')
	});
	TapInfo.forEach((item) => {
		item.classList.remove('on')
	});
}