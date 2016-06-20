//use module exports to expose middleware
module.exports = {
	requireAuthentication: function(request, response, next){
		console.log('private route hit');
		next();
},
	logger: function(request,response,next){
		console.log('Request:'+request.method+' '+request.originalUrl+ new Date().toString());
		next()
	}}