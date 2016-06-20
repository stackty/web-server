var express = require('express');
var app = express();
var PORT = process.env.PORT||3000;
var middleware = require ('./middleware.js')

app.use(middleware.logger);

app.get('/', function(reqest, response){
	response.send('Hello Express');
});
app.get('/about', middleware.requireAuthentication, function(request,response){
	response.send('about Us!');
})

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function (){
	console.log('express server has started on port %d',PORT);
});