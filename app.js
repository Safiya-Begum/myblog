const express=require('express');
const bodyParser=require('body-parser');
const fs=require('file-system');
const ejs=require('ejs');
const app=express();
const PORT=3000;
const ApiRoutesHandler=require('./ApiRoutesHandler.js');
const cors=require('cors');

const corsOptions={
    origin:'*',
    optionSuccessStatus:200
};
//set View engine
app.set('views',__dirname+'/public/templates');
app.set('view engine','ejs');
app.engine('html',ejs.renderFile);

//Allow Cross origin requests
app.use(cors(corsOptions));

//set static folder for assets
app.use(express.static(__dirname+'/public'));
//set parser for request and response bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(PORT,function(err){
    if(err){
        console.log("server couldn't start");
    }
    else{
        console.log('Server started at port ', PORT);
    }
});

app.use('/',ApiRoutesHandler);
