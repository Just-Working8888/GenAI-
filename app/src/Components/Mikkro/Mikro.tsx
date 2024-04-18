import React, { useState } from 'react';

const AudioRecorder: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        setAudioURL(URL.createObjectURL(audioBlob));
      };
      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleUpload = async () => {
    if (audioChunks.length === 0) {
      console.error('No audio recorded');
      return;
    }

    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

    // Example code for sending the audio blob to the server using fetch
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    try {
      const response = await fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        console.error('Error uploading audio:', response.statusText);
        return;
      }
      console.log('Audio uploaded successfully');
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button onClick={handleUpload} disabled={!audioURL}>
        Upload Audio
      </button>
      {audioURL && <audio controls src={audioURL} />}
    </div>
  );
};

export default AudioRecorder;


//  const response = await fetch('https://asr.ulut.kg/api/receive_data', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Authorization': 'Bearer a71e39d58d4867214ef44124a920e29b751111e362a74ecc09034385b51b21ac1b6bb6a36785d4f869a32df8bc7e939cf4901c96cc3bfea85cef46eee928640f'
//         }