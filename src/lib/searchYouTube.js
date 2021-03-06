var searchYouTube = (options, callback) => {
  // TODO
  console.log(options)
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable : true
    },
    contentType: 'application/json',
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.log('error');
    }
  });
};

window.searchYouTube = searchYouTube;



/*
$.ajax({
    url: app.server,
    type: 'GET',
    data: where = {
      "order": "-createdAt",
      "limit": "15"
    },
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      app.renderDropDown(data);
      app.renderMessage(data);
    },
    error: function() {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get message');
    }
  });

*/