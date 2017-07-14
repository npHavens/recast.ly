class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text_value : ''
    };
  }

  handleInput(event) {
    this.setState({text_value: event.target.value});
    this.props.searchTrigger(this.state.text_value);
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp={this.handleInput.bind(this)}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
