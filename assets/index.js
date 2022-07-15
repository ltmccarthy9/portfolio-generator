const fs = require("fs");
const inquirer = require('inquirer');
//const { bindNodeCallback } = require("rxjs");

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Where are you located?',
    name: 'location',
  },
  {
    type: 'input',
    message: 'bio: ',
    name: 'biography',
  },
  {
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'linkedin',
  },
  {
    type: 'input',
    message: 'What is your Github URL?',
    name: 'github',
  }
])
.then((response) => {
 console.log(response);
var userName = response.name;
var location = response.location;
var bioGraphy = response.biography;
var Linked = response.linkedin;
var github = response.github;
var HTMLPORTFOLIO = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
  </head>

  <body>
    <main>
        <h1>Welcome to My Portfolio</h1>  
    </main>

    <div>
        <h2>Name:</h2>
        <p>${userName}</p>

        <h2>Location: </h2>
        <p>${location}</p>

        <h2>Bio: </h2>
        <p>${bioGraphy}</p>

        <h2>LinkedIn: </h2>
        <p>${Linked}</p>

        <h2>GitHub: </h2>
        <p>${github}</p>
    </div>
	
  </body>

</html>`;
writeHTML(HTMLPORTFOLIO)
});

function writeHTML(portfolio){
    fs.writeFile('index.html', portfolio, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}