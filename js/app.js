const reviewsSwiper = new Swiper('.reviews-swiper', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto', // Устанавливаем количество видимых слайдов в зависимости от их ширины
    freeMode: true, // Включаем свободный режим
    freeModeSticky: true, // Включаем закрепление в свободном режиме
})

function blockHeight() {
    const block = document.querySelector('.reviews__info')
    const blockHeight = block.clientHeight

    block.style.height = blockHeight - 20 + 'px'
}

blockHeight()

function videoPlayer() {
    const video = document.querySelector('.video-player')
    const seekBar = document.querySelector('.video-input')
    const playBtn = document.querySelector('.video-play')

    video.addEventListener('timeupdate', function() {
        let value = (video.currentTime / video.duration) * 100
        seekBar.value = value
    })

    seekBar.addEventListener('change', function() {
        let time = video.duration * (seekBar.value / 100)
        video.currentTime = time
    })

    playBtn.addEventListener('click', function() {
        if(video.paused) {
            video.play()
            video.classList.add('active')
            playBtn.classList.add('active')
        } else {
            video.pause()
            playBtn.classList.remove('active')
        }
    })
}

videoPlayer()