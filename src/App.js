import "./App.css";
import { ReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useRef } from "react";

function App() {
  const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);

    if (!stream) {
      return null;
    }

    return (
      <video
        ref={videoRef}
        width={500}
        height={500}
        autoPlay
        controls
        hidden={videoRef === undefined}
      />
    );
  };

  return (
    <div className="App justify-center items-center flex-row">
      <header className="App-header flex-row justify-center items-center text-8xl mb-12 font-bold bg-gradient-to-br to-[#C70039] via-[#F94C10] from-black from-30% via-50% to-80% background-animate">
        <ReactMediaRecorder
          screen
          render={({
            status,
            startRecording,
            stopRecording,
            mediaBlobUrl,
            previewStream,
          }) => (
            <div className=" ">
              <p className=" text-transparent bg-clip-text flex-row justify-start text-8xl mb-12 font-bold bg-gradient-to-br from-[#C70039] via-[#F94C10] to-black from-30% via-50% to-60% hover:from-cyan-600 hover:via-purple-500 hover:from-30% hover:to-90% hover:to-white background-animate">
                Screen Recorder
              </p>
              <p className="m-2">Status: {status}</p>
              <button
                className="bg-gradient-to-br from-blue-600 via-purple-500 to-cyan-600 rounded-md m-6 p-2  hover:from-cyan-600 hover:via-green-500 hover:from-30% hover:to-90% hover:to-blue-600 background-animate"
                onClick={startRecording}
              >
                Start Recording
              </button>
              <button
                className="bg-gradient-to-br from-red-400 via-red-600 to-red-400 rounded-md m-6 p-2 hover:from-red-700 hover:via-red-600 hover:to-red-700 background-animate"
                onClick={stopRecording}
              >
                Stop Recording
              </button>
              <div className="flex-row justify-center items-center">
                <video
                  style={{
                    width: "50%",
                    margin: 30,
                  }}
                  src={mediaBlobUrl}
                  controls
                  autoPlay
                  loop
                  hidden={mediaBlobUrl === undefined ? true : false}
                />
                <VideoPreview
                  className="items-center justify-center"
                  stream={mediaBlobUrl === undefined ? previewStream : ""}
                />
              </div>
            </div>
          )}
        />
      </header>
    </div>
  );
}

export default App;
