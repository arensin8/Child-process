const express = require("express");
const app = express();
const {fork} = require('child_process')
app.get("/", (req, res) => {
    const child = fork('longTask.js')
    child.send('start-process')
    child.on('message' , sum => {
        res.send(sum.toString())
    })
});


app.listen(3300, () => {
    console.log('app runs at http://localhost:3300');
})