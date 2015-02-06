var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:18200177115MKV@ds039331.mongolab.com:39331/mychat');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
        // yay!
        console.log('Yay!');
        });
var msgSchema = mongoose.Schema({
                                  nick: String,
                                  date:Date,
                                  text:String
                                  });
var message = mongoose.model('message', msgSchema)
var test = new message({ nick: 'Admin', date:Date.now(), text:'This is a test message.'})
test.save(function (err, test) {
            if (err) return console.error(err);
          console.log('Ok');
            });
message.find(function (err, msgs) {
      if (err) return console.error(err);
      console.log(msgs)
             });

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Lalka\n');
}).listen(80, '0.0.0.0');
console.log('Server running at http://maxpovver.tk/');