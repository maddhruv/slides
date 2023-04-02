const { exec, execSync } = require("child_process");
const pug = require("pug");
const fs = require("fs");

const slides = ["slides", "test"];
const buildCommands = [];

const newSlides = [
  { id: "slides", title: "Slides" },
  { id: "test", title: "Test" },
];

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

const compiledFunction = pug.compileFile("homepage.pug");

const homepageHtml = compiledFunction({
  slides: newSlides,
});

fs.writeFile("dist/index.html", homepageHtml, (err) => {
  if (err) throw err;
  console.log("Homepage HTML file has been saved!");
});

execSync("cp home.css dist/home.css");
