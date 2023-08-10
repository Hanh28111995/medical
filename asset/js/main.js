//// active galery btn ////

function avtive_list(x) {
    let deactive = document.querySelectorAll('.gallery-part .btn-list .fltr-controls')
    for (let i = 0; i < deactive.length; i++) {
        deactive[i].classList.remove('active')
    }
    document.querySelector('.fltr-controls[data-filter="' + `${x}` + '"]').classList.add('active');
};

//////spin loading video

var video = document.querySelectorAll('.video');
for (let i = 0; i < video.length; i++) {



    video[i].addEventListener('loadeddata', function () {
        document.querySelectorAll('.spinner')[i].style.display = "none";
    }
        , false);
}

