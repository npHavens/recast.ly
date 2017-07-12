var VideoPlayer = (props) => {
  var currentVid = (props.video.snippet) ? props.video.snippet : {};
  //{console.log(currentVid)};
  var id = (props.video.id) ? props.video.id.videoId : "";
  var url = "https://www.youtube.com/embed/" + id;
  //src={"https://www.youtube.com/embed/" + props.video.id.videoId}
  //{console.log(props.video)};
  return (<div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{currentVid.title}</h3>
      <div>{currentVid.description}</div>
    </div>
  </div>);
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
