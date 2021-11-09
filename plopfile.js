const path = require("path");
const fs = require("fs");

const basePath = path.join(__dirname);

module.exports = (plop) => {
  function getAllFile(filePath) {
    return fs.readdirSync(path.join(basePath, filePath)).map((file) => file);
  }
  function properFileName(fileName) {
    return fileName;
  }
  plop.setGenerator("create", {
    prompts: [
      {
        type: "input",
        name: "component",
        message: "Please enter component name!",
        filter(input) {
          return properFileName(input);
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: `uiKit/components/{{component}}/src/index.ts`,
      },
      {
        type: "add",
        path: `uiKit/components/{{component}}/index.ts`,
        template: `export * from "./src";`,
      },
    ],
  });
  plop.setGenerator("story", {
    description: "create new story",
    prompts: [
      {
        type: "input",
        name: "fileName",
        message: "please enter component name",
        filter(input) {
          return properFileName(input);
        },
      },
      {
        type: "list",
        name: "component",
        message: "please choose component",
        choices: [...getAllFile("./uiKit/components")],
      },
    ],
    actions: [
      {
        type: "append",
        path: `${basePath}/uiKit/components/{{component}}/src/index.ts`,
        template: `export * from "./{{fileName}}"`,
      },
      {
        type: "add",
        path: `${basePath}/uiKit/components/{{component}}/src/{{fileName}}.tsx`,
        templateFile: "./plop/template/CreateComponent/MainFile.hbs",
      },
      {
        type: "add",
        path: `${basePath}/uiKit/components/{{component}}/stories/{{fileName}}.stories.tsx`,
        templateFile: "./plop/template/CreateComponent/storyFile.hbs",
      },
    ],
  });
};
