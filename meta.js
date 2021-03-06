module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A vue.js component dev project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "completeMessage": "To get started:\n\n {{^inPlace}}cd {{destDirName}}\n {{/inPlace}}npm install\n npm run demo:dev\n\n Documentation can be found at https://github.com/savoygu/vue-component-template#README"
}
