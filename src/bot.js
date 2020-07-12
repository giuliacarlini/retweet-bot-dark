const T = require('./twitConfig');
const http = require("http");

const requestListener = function (req, res) {};
  
const server = http.createServer(requestListener);
server.listen(8080);

var stream = T.stream('statuses/filter', { track: ['#Dark','#DarkNetflix'], language: 'pt' })

stream.on('tweet', function (tweet) {
    if ((tweet.retweeted_status == null) && (tweet.is_quote_status == false)) 
    {       
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
        });
    }
})


