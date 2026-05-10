document.addEventListener('DOMContentLoaded', () => {

    let buttonsReset = Array.from(document.querySelectorAll('button'));
    buttonsReset.forEach( (el) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
        })
    })

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
            bulletClass: 'pagination-bullet__bar'
        }
    });

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
            bulletClass: 'pagination-bullet__bar'
        }
    });
})