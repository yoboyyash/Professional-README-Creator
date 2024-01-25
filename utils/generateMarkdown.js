// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }

  return "";

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  }
  
  return "";
 
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  if (license) {
    return `
    Project License: ${license} `;

  }

  return "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);


  return `
  
  ${licenseBadge}

  # ${data.titleH1}

  ## ${data.sloganH2}

  Table of Contents
  
  * [Description](#descriptionP1)
  * [How to](#usage)
  * [License](#licenseSection)
  * [Contact](#email)

  <p> ${data.descriptionP1} </p>
  
  <p> ${data.usage} </p>

  <p> Project Contributors: ${data.contribution} </p>

  ${licenseSection} 
  ${licenseLink}

  <p> (https://github.com/${data.username}) </p>

  <p> Contact Me! </p>
  <p> ${data.email} </p>

`;

}

module.exports = generateMarkdown;


