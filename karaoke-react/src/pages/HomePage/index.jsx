import "./style.css";
import Player from "../../components/Player";
import Lyrics from "../../components/Lyrics";
import lyricsLines from "../../lyrics-lines";
import { useState } from "react";

export const HomePage = () => {
  const [activeLine, setActiveLine] = useState(-1);

  const handleTimeUpdate = (time) => {
    const lessTime = lyricsLines.filter((line) => line.time < time);
    setActiveLine(lessTime.length - 1);
  };

  return (
    <div className="container">
      <Player
        onTimeUpdate={handleTimeUpdate}
        src="/fools-garden-lemon-tree.mp3"
      />
      <Lyrics lines={lyricsLines} currentLineIndex={activeLine} />
    </div>
  );
};
