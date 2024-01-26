//// active galery btn ////

function avtive_list(x) {
    let deactive = document.querySelectorAll('.gallery-part .btn-list .fltr-controls')
    for (let i = 0; i < deactive.length; i++) {
        deactive[i].classList.remove('active')
    }
    document.querySelector('.fltr-controls[data-filter="' + `${x}` + '"]').classList.add('active');
};

let player;
let player_logo;

function onYouTubeIframeAPIReady() {

    player = new YT.Player('youtube-video-1', {
        playerVars: {
            'suggestedQuality': 'hd720', // Suggest HD 720p quality
            'showinfor' : '0'

        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    player_logo = new YT.Player('youtube-video-2', {
        playerVars: {
            'suggestedQuality': 'hd720' // Suggest HD 720p quality
        },
        events: {
            'onReady': onPlayerReady_logo
        }
    });
}
function onPlayerReady(event) {
    player.pauseVideo();
    document.getElementById('playIcon').addEventListener('click', function () {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
            document.getElementById('toggleButton').style.display = 'none'
        }
        let layoutVideo = document.querySelector('.about-us-vid')
        layoutVideo.addEventListener('click', function(){
            if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
                document.getElementById('toggleButton').style.display = 'block';
                document.getElementById('toggleButton').style.backgroundImage = 'unset';  
            }
            
        })    
    });
}
function onPlayerStateChange(event) {    
    if (event.data === YT.PlayerState.ENDED) {        
        document.getElementById('toggleButton').style.display = 'block';
        document.getElementById('toggleButton').style.backgroundImage ="url('/../asset/image/video-capture-4037.png')";          
    }
}

function onPlayerReady_logo(event) {
    window.addEventListener('scroll', function () {
        if (isElementInViewport(document.getElementById('youtube-video-2'))) {
            player_logo.playVideo();
        } else {
            player_logo.pauseVideo();
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

onYouTubeIframeAPIReady();
// }




$(document).ready(function () {
    $('.counter').countUp();
})

$(window).on('load', function () {
    const filterizr = $('.filter-container').filterizr({
        controlsSelector: '.fltr-controls',
        gridItemsSelector: '.filtr-item',
        spinner: {
            enabled: true,
        },
    });
    $("#shuffle").click(() => {
        filterizr.filterizr('shuffle');
    })
    const sortFilterizr = (order) => {
        filterizr.filterizr('sort', $("select :selected").val(), order);
    }
})

var loader = document.getElementById('preloader');

window.addEventListener("load", function(){
    // setTimeout(function() {
        loader.style.display = "none";
    //   }, 200);
})


