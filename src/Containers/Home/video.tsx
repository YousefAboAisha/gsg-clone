import { useState, useRef } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const VideoHero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative rounded-xl">
      <video
        width="320"
        height="140"
        className="w-full rounded-[20px]"
        muted
        ref={vidRef}
      >
        <source src="/resort.mp4" type="video/mp4" />
      </video>

      {isPlaying ? (
        <div
          onClick={() => {
            setIsPlaying(false);
            vidRef.current?.pause();
          }}
          className="abs-center w-fit h-fit bg-primary rounded-full cursor-pointer  duration-700 p-3 flex justify-center items-center"
        >
          <BsFillPauseFill size={30} className="text-white" />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsPlaying(true);
            vidRef.current?.play();
          }}
          className="abs-center w-fit h-fit bg-primary rounded-full cursor-pointer  duration-700 p-3 flex justify-center items-center"
        >
          <BsFillPlayFill size={30} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default VideoHero;
