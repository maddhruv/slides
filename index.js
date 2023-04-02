const { exec, execSync } = require("child_process");
const pug = require("pug");
const fs = require("fs");

const buildCommands = [];

const newSlides = [
  { id: "mastering-typescript", title: "Mastering TypeScript" },
];

newSlides.forEach((slide) => {
  buildCommands.push(
    `slidev build ${slide.id}.md --base /${slide.id}/ --out dist/${slide.id}`
  );
});

const promises = buildCommands.map(
  (command) =>
    new Promise((resolve, reject) => {
      exec(command, (error, stdout) => {
        error ? reject(error) : resolve(stdout);
      });
    })
);

Promise.all(promises)
  .then(() => console.log("Done! ✅"))
  .catch((error) => console.error(error));

const compiledFunction = pug.compileFile("homepage.pug");

const homepageHtml = compiledFunction({
  slides: newSlides,
});

fs.writeFile("dist/index.html", homepageHtml, (err) => {
  if (err) throw err;
  console.log("Homepage HTML file has been saved!");
});

execSync("cp home.css dist/home.css");
