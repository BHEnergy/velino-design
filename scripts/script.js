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

    /* Бесконечная строчка с текстом */
    const infinityText = new Swiper('.js-init-infinity__text', {
        loop: true,
        freeMode: false,
        allowTouchMove: false,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 30000,
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

    /* Открытие фильтра */
    const buttonsFilter = document.querySelectorAll('.filter--input__button');
    buttonsFilter.forEach( (el, index) => {
        let select = el.closest('.filter--input__select');
        let chars = select.querySelector('.filter--select__body');
        el.addEventListener('click', () => {
            el.classList.toggle('active');
            chars.classList.toggle('filter-open');
        })
    });

    const checkboxFiltes = document.querySelectorAll('.filter--select__char');
    checkboxFiltes.forEach( (el, index) => {
        let checkboxContainer = el.closest('.checkbox__container--filter');
        el.addEventListener('click', () => {
            checkboxContainer.classList.toggle('checked');
        })
    });

    /* Табы */
    const tabsArray = document.querySelectorAll('.tab');
    tabsArray.forEach( (el, index) => {
        el.addEventListener('click', () => {
            let selectTab = el;
            let currentTab = document.querySelector('.tab--active');
            let currentTabContainer = document.querySelector('.tab-container--active');
            let selectTabContainer = document.querySelector(`.tab-container[data-tab="${el.dataset.tab}"]`);

            currentTab.classList.remove('tab--active');
            currentTabContainer.classList.remove('tab-container--active');
            selectTab.classList.add('tab--active');
            selectTabContainer.classList.add('tab-container--active');
        })
    });

    /* Табы в ЛК*/
    const tabsLkArray = document.querySelectorAll('.tab-orders');
    tabsLkArray.forEach( (el, index) => {
        el.addEventListener('click', () => {
            let selectTab = el;
            let currentTab = document.querySelector('.tab-orders--active');
            let currentTabContainer = document.querySelector('.tab-orders-container--active');
            let selectTabContainer = document.querySelector(`.tab-orders-container[data-tab="${el.dataset.tab}"]`);

            currentTab.classList.remove('tab-orders--active');
            currentTabContainer.classList.remove('tab-orders-container--active');
            selectTab.classList.add('tab-orders--active');
            selectTabContainer.classList.add('tab-orders-container--active');
        })
    });


    /* Пароли */
    const passwordButton = document.querySelectorAll('.password-button');
    passwordButton.forEach( (el, index) => {
        el.addEventListener('click', () => {
            el.classList.toggle('open');
            let passContainer = el.closest('.password-container');
            let input = passContainer.querySelector('input');
            if(input.type != "text") {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        });
    })
})