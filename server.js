const express = require ('express');
const app = express();
const path = require('path'); // it comes with node, built-in module


app.use('/dist', express.static(path.join(__dirname,'dist'))); //what is this doing?
app.get('/',(req,res,next)=>
res.sendFile(path.join(__dirname,'index.html'))); //why not send, but sendFile

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));




