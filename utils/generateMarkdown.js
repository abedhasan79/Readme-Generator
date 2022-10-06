// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if (license !== 'none') {
        badge = `![license badge](https://img.shields.io/badge/license-${license}-success)`;
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let link;
    if (license === 'MIT') {
        link = '[https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)';
    } else if (license === 'Apache') {
        link = '[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)';
    } else if (license === 'BSL') {
        link = '[https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)'
    } else {
        link = '';
    }
    return link;

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = '';
    if (license !== 'none') {
        licenseSection = `## License\n${license}\n${renderLicenseLink(license)}\n`;
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {}

module.exports = generateMarkdown;