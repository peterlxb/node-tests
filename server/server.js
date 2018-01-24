const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.status(404).send({
        error: "Page not found",
        name:'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: "eve",
        age: 24
    },{
        name:'peter',
        age:25
    },{
        name:'jane',
        age:26
    }]);
});

//GET 
app.get('/users');

app.listen(3002);

module.exports.app = app;