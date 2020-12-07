#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { launchApp } from "./util";

let packagePath = undefined;

try {
  packagePath = path.dirname(
    require.resolve("wdio-ywinappdriver-service/package.json")
  );
} catch (err) {
  console.log(
    "wdio-ywinappdriver-service is not found, please `npm install wdio-ywinappdriver-service --save-dev`"
  );
  process.exit(1);
}

let winappdriver = path.join(packagePath, "bin", "winappdriver.exe");

fs.access(winappdriver, fs.constants.F_OK, (err) => {
  if (err) {
    console.log("File not found " + winappdriver);
  } else {
    console.log("Launch YWinAppDriver and press any key to exit");
    launchApp(winappdriver);
  }
});
