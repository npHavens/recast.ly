var VideoListEntry = (props) => {
  let vid = props.video.snippet;
  //console.log(vid);
  // let onVideoItemClick = (event) => {
  //{console.log(props.onListClick)}
  //}
  var onItemClick = (event) => {
    props.onListClick(props.video);
  };

  return (
    <div className="video-list-entry" onClick={onItemClick}>
      <div className="media-left media-middle">
        <img className="media-object" src={vid.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" >{vid.title}</div>
        <div className="video-list-entry-detail">{vid.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
