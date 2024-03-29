const { spawn } = require("child_process");
// const child = spawn('ls',['-lh']);

// child.stdout.on('data' , data => {
//     console.log("stdout : " , data.toString());
// })

// child.stdout.on('error' , err => {
//     console.log("error:" , err.toString());
// })

// child.on('exit' , (code,signal) => {
//     console.log("Process exit with code:" , code);
//     console.log("Process kileed with signal:" , signal);
// })
console.log(process.pid);
for (let index = 0; index < 15; index++) {
  const child = spawn("node", ["help.js" , index]);
  child.stdout.on("data", (data) => {
    console.log("stdout : ", data.toString());
  });

  child.stdout.on("error", (err) => {
    console.log("error:", err.toString());
  });
}
