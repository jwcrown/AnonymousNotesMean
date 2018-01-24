var Posts=require('./../controllers/Maincontroller');
module.exports = function(app){
    app.post('/process',function(req,res){
        console.log('Im in express routes');
        Posts.create(req,res);
    });

    app.get('/show', function(req,res){
		
		Posts.all(req,res);
	})

};