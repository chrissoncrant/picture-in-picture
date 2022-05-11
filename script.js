const video = document.getElementById('video');
const button = document.getElementById('pipButton');

async function selectMediaStream(displayMediaOptions) {
    let captureStream = null;

    try {
        captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        video.srcObject = captureStream;
        video.onloadedmetadata = () => {
            video.play();
        }

    } catch(err) {
        console.error('Error', err);
    };

    return captureStream;

}

selectMediaStream();

button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
});