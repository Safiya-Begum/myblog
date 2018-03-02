const express=require('express');
const router=express.Router();
const mongoJS=require('mongojs');
const dbInstance=mongoJS('mongodb://application:application@ds243798.mlab.com:43798/myblogdata');

router.get('/',function(req,res){
   res.render(__dirname+'/index.html');
});

router.get('/api',function(req,res){
    res.send('Please provide the exact api');
});

router.get('/api/getMyPost/:category/:id',function(req,res){
    getCollectionName(req.params.category).findOne(mongoJS.ObjectId(req.params.id),function(err, blogdata){
        if(err){
            console.log('There was an error connecting to DB');
        }
        else {
            res.json(blogdata);
        }
    });
});


router.get('/api/getMyPosts/:category',function(req,res){
    getCollectionName(req.params.category).find(function(err, blogdata){
        if(err){
            console.log('There was an error connecting to DB');
        }
        else {
            res.json(blogdata);
        }
    });
});

router.post('/api/savePost',function(req,res){
    let postedData=req.body;
    getCollectionName(postedData.category).save(postedData.post,function(err, blogdata){
        if(err){
            res.send('Could not save your response!!');
            res.send({status:''});
        }
        else{
            console.log('Data posted');
            res.send({status:'OK'});
        }
    });
});

router.put('/api/updatePost/:category/:id',function(req,res){
    let postedData=req.body;
    getCollectionName(req.params.category).findAndModify({
        query:{_id:mongoJS.ObjectId(req.params.id)},
        update:{ $set : {data:postedData.data,postedTime:postedData.postedTime}}
    },function(err, blogdata){
        if(err){
            res.send('Could not update your response!! Error:: '+err);
            res.send({status:''});
        }
        else{
            console.log('Data Updated');
            res.send({status:'OK'});
        }
    });
});

router.delete('/api/deletePost/:category/:id',function(req,res){
    let postedData=req.body;
    getCollectionName(req.params.category).remove({_id:mongoJS.ObjectId(req.params.id)},function(err, blogdata){
        if(err){
            res.send('Could not update your response!! Error:: '+err);
            res.send({status:''});
        }
        else{
            res.send({status:'OK'});
        }
    });
});

function getCollectionName(collectionName){
    switch(collectionName){
        case 'fruits':
            return dbInstance.fruits
        break;
        case 'veggies':
            return dbInstance.veggies
        break;
        case 'dryFruits':
            return dbInstance.dryFruits
        default:
            return dbInstance.defaultCollection
    }
}

module.exports=router;
