import classes from './VideoPicker.module.css';

const VideoPicker = (props) => {
  return (
    <div className={`${classes['video-picker']} d-flex overflow-scroll`}>
      {props.videos.map((video) => (
        <img
          src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
          alt={video.name}
          key={video.id}
          onClick={props.onSelectVideo.bind(this, video.key)}
        />
      ))}
    </div>
  );
};

export default VideoPicker;
