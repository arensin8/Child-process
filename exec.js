const {exec} = require('child_process');
exec("rm -rf index.txt", (err,stdout , stderr) => {
    if(err) console.log(err.message);
    if(stderr) console.log(stderr);
    console.log("stdout:" , stdout);
})