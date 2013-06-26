var express       = require('express')
, path            = require('path')
,   http          = require('http')
,   _             = require('underscore')
,   routes        = require('./routes')
,   app           = express();


app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/',            routes.home );

http.createServer(app).listen(app.get('port'), function(){
  console.log('holla on port ' + app.get('port'));
});
