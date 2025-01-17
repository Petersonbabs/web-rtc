const getMediaDevices = async()=>{
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
        const videoTracks = stream.getAudioTracks()
        console.log(stream)
        console.log(videoTracks)
    } catch (error) {
        console.log(error)
    }
}




function getConnectedDevices(type, callback) {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
}

getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));

async function playVideoFromCamera() {
    try {
        const constraints = {'video': true, 'audio': true};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    } catch(error) {
        console.error('Error opening video camera.', error);
    }
}

// playVideoFromCamera()