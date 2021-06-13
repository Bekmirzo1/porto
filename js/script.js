'use strict';
// *Эта функция проверяет поддерживается ли браузером формат изображения webp и если поддерживается, то эта функция добавляет из css-документа внутрь html-документа класс с изобажением формата webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// *Burger
let menuBody = document.querySelector('.menu__body');
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}
;
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = animItem.getBoundingClientRect().top + pageYOffset;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
};
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (!isMobile.any()) {
    document.body.classList.add('_pc')
}

const sliders = document.querySelectorAll('.slider');
if (sliders.length > 0) {
    for (let index = 0; index < sliders.length; index++) {
        const slider = sliders[index];
        let mySwiper;
        window.addEventListener('resize', mobileSlider);
        function mobileSlider() {
            if (document.documentElement.clientWidth >= 767 && slider.dataset.mobile == 'true') {
                mySwiper = new Swiper(slider, {
                    navigation: {
                        nextEl: '._icon-next',
                        prevEl: '._icon-next-r'
                    },
                    effect: 'fade',
                    fadeEffect: {
                        // Параллельная смена прозрачности
                        crossFade: true
                    },
                    loop: false,
                    slidesPerView: 1,
                    simulateTouch: false,
                });
                slider.dataset.mobile = 'false';
            } else if (document.documentElement.clientWidth < 767) {
                slider.dataset.mobile = 'true'
                if (slider.classList.contains('swiper-container-initialized')) {
                    mySwiper.destroy()
                }
            }
        }
        mobileSlider();
    }
}


// footerIcon up
const footerIcon = document.querySelector('.footer__icon');
if (footerIcon) {
    footerIcon.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
}