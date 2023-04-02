const { exec } = require("child_process");

const slides = ["slides", "test"];
const buildCommands = [];

slides.forEach((slide) => {
  buildCommands.push(
    `slidev build ${slide}.md --base /${slide} --out dist/${slide}`
  );
});

const promises = buildCommands.map((command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
});

Promise.all(promises)
  .then(() => {
    console.log("Done! ✅");
  })
  .catch((error) => {
    console.error(error);
  });
