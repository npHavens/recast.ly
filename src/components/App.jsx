class App extends React.Component {
  constructor(props){
    // call the constructor of React.Component
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.videos}/>
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

