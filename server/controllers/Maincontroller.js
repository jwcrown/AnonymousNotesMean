var mongoose=require('mongoose');
var Note=mongoose.model('Note');

module.exports ={
    create:function(req,res){
        console.log("making post");
        console.log(req.body.note);
        Note.create({message: req.body.note}, function(err, note){
            Note.find({}).sort('-createdAt').exec(function(err,notes){
                res.json(notes);
            })
        });
    },
    all:function(req,res){
        Note.find({}).sort('-createdAt').exec(function(err,notes){
            res.json(notes);
        })
    }
}