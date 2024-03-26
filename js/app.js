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

function modulesCollapse() {
    const modulesBtns = document.querySelectorAll('.module-open')

    modulesBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const currentModule = btn.closest('.module')
            currentModule.classList.toggle('active')

            checkActive()
        })
    })

    function checkActive() {
        const infoBlocks = document.querySelectorAll('.module__info')

        infoBlocks.forEach(function(block) {
            console.log(block);
            if(block.closest('.module').classList.contains('active')) {
                block.style.height = block.scrollHeight + 'px'
            } else {
                block.style.height = '0px'
            }
        })
    }

    checkActive()
}

modulesCollapse()