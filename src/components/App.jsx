class App extends React.Component {
  constructor(props){
    //console.log(props);
    // call the constructor of React.Component
    super(props);
    this.state = {
      options : {query: 'cat', max: 5, key: YOUTUBE_API_KEY},
      videoList: [],
      currentVideo: {}
    };

  }

  componentDidMount() {
    this.result = this.props.searchYouTube(
      this.state.options, data => {
        this.setState({
          videoList: data.items,
          currentVideo : data.items[0]
        });
      }
    );
  }
  onVideoItemClick(video) {
    if (this.state) {
      this.setState({currentVideo: video });
    }
  }

  onSearchInput(text) {
    {console.log(text);}
    this.setState({options: {query: text, max: 5, key: YOUTUBE_API_KEY}});
    this.componentDidMount();
  }


  render() {
    return (
      <div>
        <Nav searchTrigger={this.onSearchInput.bind(this)} />
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

// functions get passed down, events bubble up
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

