function generateReadme(userInput) {
    return `# ${userInput.title}


## Description
    ${ userInput.Description }


## Installation
    ${ userInput.Installtion }

## Usage
    ${ userInput.Usage }

## Contribution
    ${ userInput.Contribution }


## Tests
    ${ userInput.Tests }


## License

    ![License](https://img.shields.io/badge/license-${userInput.License}-blue.svg)]


## Questions
Check out my Github: ${ userInput.Username }
If you have any questions, feel free to reach me at: ${ userInput.Email }



`
}


module.exports = generateReadme;