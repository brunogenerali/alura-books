const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    loop: true,
    pagination: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});