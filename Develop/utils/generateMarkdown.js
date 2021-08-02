// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

  switch (data.license) {
    case 'Apache 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-Clause':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GNU AGPLv3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU GPLv2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU GPLv3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      break;
  }

  // Generating table of content

  let tableCont = `\n## Table of Contents\n`
  if (data.install) { tableCont += `* [Installation](#installation)\n`; }
  if (data.usage) { tableCont += `* [Usage](#usage)\n`; }
  if (data.contribution) { tableCont += `* [Contribution](#contribution)\n`; }
  if (data.test) { tableCont += `* [Tests](#tests)\n`; }
  if (data.license) { tableCont += `* [License](#license)\n`; }
  if (data.email) { tableCont += `* [Questions](#questions)\n`; }
 
   // the license copyright date
   let year = new Date();
  
   /*** Generation of ReadME file***/
   //--------------------------//
 
   // The README title
   let readmeLayout = `# ${data.title}\n`;
 
   //Add license badge 
   readmeLayout += `\n${licenseBadge}\n\n---\n`;
 
   //Add the description heading and description body
   readmeLayout += `\n## Description\n${data.description}\n`;
 
   //Add table of contents per the users input
   readmeLayout += tableCont;
 
   //Add installation procedures
   
   readmeLayout += `\n## Installation\n${data.install}\n`;
   
 
   //Add User Guide
   
   readmeLayout += `\n## Usage\n${data.usage}\n`;

   // Contribution heading and contribution guidelines per users input
  
   readmeLayout += `\n## Contribution\n${data.contribution}\n`;
 

   //Add usage heading and notes per users input
  
   if (data.test) {
    readmeLayout += `\n## Tests\n${data.testNotes}\n`;  
  }
   //Add a license section
   readmeLayout += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;
   //Add questions section
   readmeLayout += `\n## Questions\n*For any additional information find me at* \n\nGitHub: [@${data.github}](https://github.com/${data.github}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`;
 
  return readmeLayout;

}//End of generateMarkDown
   
 



module.exports = generateMarkdown;
