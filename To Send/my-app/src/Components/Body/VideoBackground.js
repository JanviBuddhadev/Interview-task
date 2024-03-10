import React from "react";
import "./VideoBackground.css";
import result1 from "../../Images/result1.jpg";
import result2 from "../../Images/result2.jpg";
import result3 from "../../Images/result3.webp";

const VideoBackground = () => {
  const key = "lQv9jO17ZM4";
  return (
    <div className="video-player">
      <iframe
        src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameborder="0"
        className="iframe-video"
      ></iframe>
      <h1 className="video-background-title">ISU RESULTS</h1>
      <div className="card-list">
        <div className="card">
          <img
            className="card-image"
            alt="Some error in loading poster of a movie"
            src={result1}
          />
          <div className="card-overlay">
          <p className="overlay-text">VIEW RESULT</p>
        </div>
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="Some error in loading poster of a movie"
            src={result2}
          />

        </div>
        <div className="card">
          <img
            className="card-image"
            alt="Some error in loading poster of a movie"
            src={result3}
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="Some error in loading poster of a movie"
            src={result1}
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            alt="Some error in loading poster of a movie"
            src={result2}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
