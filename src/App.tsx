import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./styles.css";

export default function App() {
  const player = useRef<HTMLVideoElement>(null);

  const videoPlay = (isVisible: boolean) => {
    if (isVisible) {
      player.current?.play();
    } else {
      player.current?.pause();
    }
  };

  const playOnMouse = (e: React.MouseEvent<HTMLVideoElement>) => {
    // e.currentTarget.play();
  };

  const pauseOnMouse = (e: React.MouseEvent<HTMLVideoElement>) => {
    // e.currentTarget.pause();
  };

  return (
    <div className="App">
      <VisibilitySensor onChange={videoPlay}>
        <video
          ref={player}
          controls
          // onMouseEnter={playOnMouse}
          // onMouseOut={pauseOnMouse}
        >
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            type="video/mp4"
          />
        </video>
      </VisibilitySensor>
    </div>
  );
}
