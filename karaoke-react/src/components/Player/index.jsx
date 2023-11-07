import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const handleTimeUpdate = (e) => {
    onTimeUpdate(e.target.currentTime);
  };

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate}></audio>
      <div className="player-controls">
        <button
          onClick={handlePlaying}
          className={playing ? "play-button pause" : "play-button play"}
        ></button>
      </div>
    </>
  );
};

export default Player;
