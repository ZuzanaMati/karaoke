import "./style.css";
import { useEffect, useRef } from "react";

const Lyrics = ({ lines, currentLineIndex }) => {
  const lyricsScrollRef = useRef();
  

  useEffect(() => {
    if (lyricsScrollRef.current) {
      lyricsScrollRef.current.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {lines.map((line, index) => (
        <p
          key={line.time}
          className={index === currentLineIndex ? "current-line" : null}
          ref={index === currentLineIndex ? lyricsScrollRef : null}
        >
          {line.text}
        </p>
      ))}
    </div>
  );
};

export default Lyrics;
