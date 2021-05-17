import classes from './VideoPlayer.module.css';

const VideoPlayer = (props) => {
  return (
    <div className={`${classes.container} m-auto`}>
      <div className={`${classes['video-player']} mt-4`}>
        <iframe
          key={props.videoKey}
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${props.videoKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
