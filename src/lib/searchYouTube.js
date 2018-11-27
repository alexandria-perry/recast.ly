
var searchYouTube = (options, callback) => {
console.log('searching youtube for' + options.query)
 $.get('https://www.googleapis.com/youtube/v3/search',
      {
        q : options.query,
        maxResults: options.max,
        part: 'snippet',
        key:options.key,
        type: 'video'

    },(response) => {callback(response.items) })

};

export default searchYouTube;
