
var searchYouTube = (options, callback) => {
 
 $.get('https://www.googleapis.com/youtube/v3/search',
      {
        q : options.query,
        maxResults: options.max,
        part: 'snippet',
        key: options.key,
        type: 'video'

    },(response) => { callback(response.items) })

      
};

export default searchYouTube;

