import React, { useEffect, useRef } from 'react';

const VideoStream = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: {facingMode: {exact: 'environment'}} })
            .then(stream => {
                videoRef.current.srcObject = stream;
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <video ref={videoRef} id="video" playsInline autoPlay></video>
    );
}

export default VideoStream