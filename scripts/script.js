document.addEventListener('DOMContentLoaded', () => {

    let buttonsReset = Array.from(document.querySelectorAll('button'));
    buttonsReset.forEach( (el) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
        })
    })

    /* Слайдер - Первый баннер */
    const firstBanner = new Swiper('.js-init-first__banner', {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 10000
        },
        pagination: {
            el: '.first__banner-pagination',
            type: 'bullets',
            bulletClass: 'pagination-bullet__bar',
            clickable: true
        },
        on: {
            click() {
                firstBanner.slideNext()
            }
        }

    });

    /* Слайдер - Отзывы внизу на главной */
    const reviews = new Swiper('.js-init-review-slider', {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        spaceBetween: 40,
        autoplay: {
            delay: 10000
        },
        pagination: {
            el: '.reviews-pagination',
            type: 'bullets',
            bulletClass: 'pagination-bullet__bar',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews-control-next',
            prevEl: '.reviews-control-prev',
        },
    });

    /* Маска для телефона */
    document.querySelectorAll('[name="phone"]').forEach(input => {
        IMask(
        input,
            {
                mask: '+{7} (000) 000-00-00'
            }    
        );
    });

    /* Смена на мобильные картинки */
    if(window.innerWidth <= 768) {
        document.querySelectorAll('.has-mobile-pic').forEach( el => {
            el.src = el.dataset.mobile;
        })
    }

    /* Бургер-меню */
    const burgerBtn = document.getElementById('burger-button');
    burgerBtn.addEventListener('click', (el) => {
        let mobileMenu = document.getElementById('mobileMenu');
        el.target.classList.toggle('active')
        mobileMenu.classList.toggle('active');
        document.querySelector('body').classList.toggle('disable-overflow');
    })

    /* Закрепление шапки при скролле на мобилке */
    if(innerWidth <= 768) {
        window.addEventListener('scroll', () => {
            let fixedMenu = document.querySelector('.menu__upper');
            let marginMenu = document.querySelector('.menu__down');
            if(window.scrollY > 300) {
                fixedMenu.classList.add('enable-fixed');
                marginMenu.classList.add('space-header');
            } else {
                fixedMenu.classList.remove('enable-fixed');
                marginMenu.classList.remove('space-header');
            }
        })
    }

    /* Dropdown в статье */
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    dropdownItems.forEach( (el, index) => {
        el.addEventListener('click', () => {
            el.classList.toggle('item--expanded');
        })
    })


    /* Скролл */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});
})