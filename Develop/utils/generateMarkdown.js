// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenses = [`MIT_License`,`Apache_License_2.0`,`GPL_License`];
  let index = license.indexOf(license);
  if (index!=-1) {
    return `https://img.shields.io/badge/license-${licenses[index]}-success`;
  }
  console.log(`License Badge: Failed.\nFailed License:${license},${index},${license[index]}`);
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenses = [`MIT_License`,`Apache_License_2.0`,`GPL_License`];
  let licenseLinks = [`https://opensource.org/licenses/MIT`,`https://www.apache.org/licenses/LICENSE-2.0`,`https://www.gnu.org/licenses/gpl-3.0.en.html`];
  let index = licenses.indexOf(license);
  if(index!=-1){
    return licenseLinks[index];
  }
  console.log(`License Badge: Failed.\nFailed License:${license},${index},${license[index]}`);
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  let licenses = [`MIT_License`,`Apache_License_2.0`,`GPL_License`];
  let yyyy = new Date().getFullYear();
  licenseTexts = [`Copyright ${yyyy} ${name}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,`Copyright ${yyyy} ${name}

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`,`Copyright (C) ${yyyy}  ${name}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).`];
  let index = licenses.indexOf(license);
  if(index!=-1){
    return licenseTexts[index];
  }
  console.log(`License Section: Failed`);
  return ``;
}

function generateSection(sectionName, sectionContent) {
  return `\n\n## ${sectionName}

${sectionContent}`;
}

function generateLicenseSection(license, name) {
  let licenseSection = renderLicenseSection(license, name);
  let value = `${licenseSection}`;
  
  return value;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license, data.name);
  let README = `# ${data.title}
  [![${data.license}]`+`(${licenseBadge})]`+`(${licenseLink})
  `;
  for (key in data) {
    if (key == `title`) {
      continue;
    }

    if (key == `license`) {
      README += `\n\n## license\n\n`+generateLicenseSection(data[key], data.name);
      continue;
    }

    if (key == `name`) {
      README += `\n\n## questions\n\nIf you wish to contact me, my Github is [${data.name}](https://github.com/${data.name}) and my email is: ${data.email}.`
      return README;
    }

    README += generateSection(key,data[key]);
  }
  return console.error(`license wasn't called`);;
}

module.exports = generateMarkdown;
