document.addEventListener('DOMContentLoaded', function() {
    const directUrlRadio = document.getElementById('direct-url');
    const xtreamCodeRadio = document.getElementById('xtream-code');
    const directUrlInput = document.getElementById('direct-url-input');
    const xtreamCodeInput = document.getElementById('xtream-code-input');

    directUrlRadio.addEventListener('change', toggleInputFields);
    xtreamCodeRadio.addEventListener('change', toggleInputFields);

    function toggleInputFields() {
        if (directUrlRadio.checked) {
            directUrlInput.style.display = 'block';
            xtreamCodeInput.style.display = 'none';
        } else if (xtreamCodeRadio.checked) {
            directUrlInput.style.display = 'none';
            xtreamCodeInput.style.display = 'flex';
        }
    }

    toggleInputFields(); // Set initial visibility based on the default checked radio button
});

function loadStream() {
    const directUrlRadio = document.getElementById('direct-url');
    const videoPlayer = document.getElementById('video-player');

    let streamUrl = '';

    if (directUrlRadio.checked) {
        streamUrl = document.getElementById('stream-url').value;
    } else {
        const server = document.getElementById('xtream-server').value;
        const username = document.getElementById('xtream-username').value;
        const password = document.getElementById('xtream-password').value;

        if (server && username && password) {
            streamUrl = `${server}/get.php?username=${username}&password=${password}&type=m3u8&output=mpegts`;
        } else {
            alert('Please fill in all Xtream Code details.');
            return;
        }
    }

    if (streamUrl) {
        videoPlayer.src = streamUrl;
        videoPlayer.load();
        videoPlayer.play();
    } else {
        alert('Please enter a valid stream URL.');
    }
}
