#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
const { spawn } = require('child_process');

var winappdriver = undefined;
var packagePath = undefined;

try {
 packagePath = path.dirname(require.resolve("wdio-ywinappdriver-service/package.json"));
}
catch(err) {
    console.log('wdio-ywinappdriver-service is not found, please `npm install wdio-ywinappdriver-service --save-dev`');
    process.exit(1);
}

winappdriver = path.join(packagePath, 'bin', 'winappdriver.exe')

fs.access(winappdriver, fs.constants.F_OK, (err) => {
    if (err) { 
        console.log('File not found ' + winappdriver);
    } else {
        console.log('Launch YWinAppDriver and press any key to exit');
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
            process.stdin.resume();
        }
        process.stdin.on('data', process.exit.bind(process, 0));
        var args = process.argv.slice(2);
        if (args.length == 0)
        {
            args = ['--urls', 'http://127.0.0.1:4723']
        }
        const child = spawn(winappdriver, args);

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


