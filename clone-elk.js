const SHELL = require('shelljs');
const FS = require('fs');
const PATH = require('path');

const ELK_VERSION = 'v0.7.0';

console.log('Preparing ELK GWT compile...');
const pwd = __dirname;
const elkPath = PATH.join(pwd, '..', 'elk');
if (!FS.existsSync(elkPath)) {
 console.log(`ELK is not found at '${elkPath}' cloning version '${ELK_VERSION}'`);
 SHELL.cd(PATH.join(pwd, '..'));
 SHELL.exec(`git clone --branch ${ELK_VERSION} https://github.com/eclipse/elk`);
} else {
    console.log(`ELK is found at '${elkPath}'`);
}
