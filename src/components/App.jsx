class App extends React.Component {

  constructor(props){
    //console.log(props);
    // call the constructor of React.Component
    super(props);

    this.props.searchYouTube(this.props.options);

    if (props.videos) {
      this.state = {
        videoList:this.props.videos,
        currentVideo:this.props.videos[0]
      };
    } else {
      this.state = {
        videoList: [],
        currentVideo: {}
      };
    }
  }

  onVideoItemClick(video) {
    if (this.state) {
      this.setState({currentVideo: video });
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onListClick={this.onVideoItemClick.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}





/*
var App = () => (
  console.log("props: " + props);
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer/>
    </div>
    <div className="col-md-5">
      <VideoList/>
    </div>
  </div>
);
*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

