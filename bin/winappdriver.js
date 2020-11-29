#!/usr/bin/env node

var fs = require('fs');
const { spawn } = require('child_process');

var winappdriver = 'C:\\Program Files (x86)\\Windows Application Driver\\WinAppDriver.exe';
fs.access(winappdriver, fs.constants.F_OK, (err) => {
    if (err) { 
        console.log('Please download and install winappdriver from https://github.com/microsoft/WinAppDriver/releases');
    } else {
        console.log('Launch WinAppDriver and press any key to exit');
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
            process.stdin.resume();
        }
        process.stdin.on('data', process.exit.bind(process, 0));

        const child = spawn(winappdriver, process.argv.slice(2));

        child.stdout.on('data', (data) => {
        console.log(`${data}`);
        });

        child.stderr.on('data', (data) => {
        console.error(`${data}`);
        });

        child.on('error', (error) => {
        console.error(`error: ${error.message}`);
        });

        child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        });
    }
}); 
