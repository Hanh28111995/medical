//// active galery btn ////

function avtive_list(x) {
    let deactive = document.querySelectorAll('.gallery-part .btn-list .fltr-controls')
    for (let i = 0; i < deactive.length; i++) {
        deactive[i].classList.remove('active')
    }
    document.querySelector('.fltr-controls[data-filter="' + `${x}` + '"]').classList.add('active');
};

//////spin loading video
// var video = document.querySelectorAll('.video');
// for (let i = 0; i < video.length; i++) {
//     video[i].addEventListener('loadeddata', function () {
//         document.querySelectorAll('.spinner')[i].style.display = "none";
//     }
//         , false);
// }

let list = document.querySelectorAll('.youtube-index')

for (let i = 0; i < list.length; i++) {    

    function onYouTubeIframeAPIReady() {
        player = new YT.Player(list[i].id, {
            events: {
                'onReady': onPlayerReady
            }
        });
    }
    function onPlayerReady(event) {
        document.getElementById('ScrollAndRun').addEventListener('click', function () {
            if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        });
    }
}




$(document).ready(function(){
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


