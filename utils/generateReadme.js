function generateReadme(userInput) {
return `# ${userInput.Title}

## Description 

   ${userInput.Description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

   ${userInput.Installation}

## Usage 

${userInput.Usage}



## License

   ${userInput.License}




## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


   
## Contributing

${userInput.Contribution}

## Tests

${userInput.Tests}

   ## Questions
   Github Profile: ${userInput.profileLink}<br>
   Email: ${userInput.Email}



`
}


module.exports = generateReadme;