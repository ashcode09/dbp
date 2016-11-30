

var openVideoLightbox = function(videoContainerOpen, object) {
    console.log(videoContainerOpen, object);

    if (!videoContainerOpen) {
        document.getElementById('videoContainer').classList.add('open-video-container');
    } else {
        document.getElementById('videoContainer').classList.remove('open-video-container');
    }
};