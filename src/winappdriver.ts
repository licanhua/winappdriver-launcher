#!/usr/bin/env node

import fs from "fs";
import { launchApp } from "./util";

var winappdriver =
  "C:\\Program Files (x86)\\Windows Application Driver\\WinAppDriver.exe";
fs.access(winappdriver, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(
      "Please download and install winappdriver from https://github.com/microsoft/WinAppDriver/releases"
    );
  } else {
    console.log("Launch WinAppDriver and press any key to exit");
    launchApp(winappdriver);
  }
});
