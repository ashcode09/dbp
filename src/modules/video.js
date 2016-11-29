var videoContainerOpen = false;

var openVideoLightbox = function() {
    if (!videoContainerOpen) {
        document.getElementById('videoContainer').classList.add('open-video-container');
        videoContainerOpen = true;
    } else {
        document.getElementById('videoContainer').classList.remove('open-video-container');
        videoContainerOpen = false;
    }
};