document.addEventListener('DOMContentLoaded', () => {
    const firstBanner = new Swiper('.js-init-first__banner', {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 10000
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'pagination-bullet__bar'
        }
    })
})