const reviewsSwiper = new Swiper('.reviews-swiper', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto', // Устанавливаем количество видимых слайдов в зависимости от их ширины
    freeMode: true, // Включаем свободный режим
    freeModeSticky: true, // Включаем закрепление в свободном режиме
})