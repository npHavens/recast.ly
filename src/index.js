// TODO: Render the `App` component to the DOM
var options = {query: 'react.js', max: 5, key: YOUTUBE_API_KEY};

ReactDOM.render(<App videos={exampleVideoData} searchYouTube={searchYouTube} options={options}/> , document.getElementById('app'));