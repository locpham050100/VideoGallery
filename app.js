var videos = document.querySelectorAll('.videos video')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryVideo = document.querySelector('.gallery_inner video')
var gallery = document.querySelector('.gallery')
var audio = document.getElementById("myVideo")

var currentIndex = 0

function galleryShow() {
    if ( currentIndex == 0 ) {
        left.classList.add('hide')
    } else {
        left.classList.remove('hide')
    }

    if ( currentIndex == videos.length - 1 ) {
        right.classList.add('hide')
    } else {
        right.classList.remove('hide')
    }

    galleryVideo.src = videos[currentIndex].src
    gallery.classList.add('show')
}

videos.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        galleryShow()
        audio.muted = false
    })
})


close.addEventListener('click', function() {
        gallery.classList.remove('show')
        audio.muted = true
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

left.addEventListener('click', function() {
    if(currentIndex > 0) {
        currentIndex--
        galleryShow()
    } 
})

right.addEventListener('click', function() {
    if(currentIndex < videos.length - 1) {
        currentIndex++
        galleryShow()
    } 
})
