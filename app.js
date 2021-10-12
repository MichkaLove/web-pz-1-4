const express = require('express');
const app = express();
const color = require('chalk');

app.set('views engine', 'ejs');
app.use(express.static(__dirname+'/'));
app.use(express.static(__dirname + '/book/' ));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/film.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname+'/film.html');
});

app.post('/book/book.html', (req,res)=>{
    res.sendFile(__dirname+"/book/book.html");
})

let port = process.env.PORT;
if (port==null || port== " "){
    port = 3000;
}
app.listen(port, ()=>{
    console.log(color.green('Server is started!'));
});