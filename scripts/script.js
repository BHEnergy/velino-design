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
        if(!el.target.classList.contains('active')) {
            el.target.classList.add('active');
        } else {
            el.target.classList.remove('active');
        }
    })

})