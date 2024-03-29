#!/usr/local/bin/node
const { exec } = require("child_process");
exec("ls -lh", (err, stdout, stderr) => {
  if (err) console.log(err.message);
  if (stderr) console.log(stderr);
  console.log("stdout:", stdout);
});

exec("/usr/bin/end python3 index.py", (err, stdout, stderr) => {
  if (err) console.log(err.message);
  if (stderr) console.log(stderr);
  console.log("stdout:", stdout);
});

exec("node execFile.js", (err, stdout, stderr) => {
  if (err) console.log(err.message);
  if (stderr) console.log(stderr);
  console.log("stdout:", stdout);
});