function loadStream() {
    const streamUrl = document.getElementById('stream-url').value;
    const videoPlayer = document.getElementById('video-player');

    if (streamUrl) {
        videoPlayer.src = streamUrl;
        videoPlayer.load();
        videoPlayer.play();
    } else {
        alert('Please enter a valid stream URL.');
    }
}
