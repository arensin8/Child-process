const { execFile } = require("child_process");
const { exec } = require("child_process");

exec("chmod +x index.py", (err, stdout, stderr) => {
  if (err) console.error("Error setting permissions:", err);
  if (stderr) console.error("stderr:", stderr);
  console.log("stdout:", stdout);

  // Now execute the Python script
  execFile("python3", ["./index.py"], (err, stdout, stderr) => {
    if (err) console.error("Error executing script:", err);
    if (stderr) console.error("stderr:", stderr);
    console.log("stdout:", stdout);
  });
});
