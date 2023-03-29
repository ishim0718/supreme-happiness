// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'CC0') {
    badge = '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
  } else if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'BSD') {
    badge = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
  } else if (license === 'MPL') {
    badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  } else if (license === 'WTFPL') {
    badge = '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)'
  } else {
    badge = ''
  }
  return badge;    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if(license === 'CC0') {
    link = 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache') {
    link = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'BSD') {
    link = 'https://opensource.org/licenses/BSD-2-Clause'
  } else if (license === 'MPL') {
    link = 'https://opensource.org/licenses/MPL-2.0'
  } else if (license === 'WTFPL') {
    link = 'http://www.wtfpl.net/about/'
  } else {
    link = ''
  }
  return link;    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === '') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}
  ## Table of Contents
  *[Installation](#installation)\
  *[Usage](#usage)\
  *[Contributing](#contributing)\
  *[Testing](#testing)\
  *[License](#license)\
  *[Questions](#questions)\
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Contributing
  ${data.Contribution}
  ## Testing
  ${data.Test}
  ## License
  ${renderLicenseSection(data.License)}
  ${renderLicenseLink(data.License)}
  ## Questions
  If you have any question regarding this application contact me via Github at https://github.com/${data.Github} or via email at ${data.Email}.
`;
}

module.exports = generateMarkdown;
