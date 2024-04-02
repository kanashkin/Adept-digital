const reviewsSwiper = new Swiper('.reviews-swiper', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeSticky: true,
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

function scrollModuleBlocks() {
    const modulesBlocks = document.querySelectorAll('.module')

    modulesBlocks.forEach(function(moduleBlock) {
        const moduleBlockInfo = moduleBlock.querySelector('.module__info')
        const blockScrollHeight = moduleBlockInfo.scrollHeight
        let blockClientHeight

        window.addEventListener('scroll', function() {

            blockClientHeight = moduleBlockInfo.clientHeight

            if (moduleBlock.getBoundingClientRect().top <= blockScrollHeight) {

                moduleBlock.classList.add('active')

                if (blockClientHeight < blockScrollHeight) {
                    let blockHeight = blockScrollHeight - moduleBlock.getBoundingClientRect().top

                    if (blockHeight <= blockScrollHeight) {
                        moduleBlockInfo.style.height = blockHeight + 'px'
                    } else {
                        moduleBlockInfo.style.height = blockScrollHeight + 'px'
                    }
                }
            } else if (moduleBlock.getBoundingClientRect().top <= 0) {
                moduleBlockInfo.style.height = blockScrollHeight + 'px'
            }

        })
    })
}

if (window.innerWidth >= 1440) {
    scrollModuleBlocks()
}