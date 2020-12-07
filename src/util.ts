import path, { dirname } from "path";
import { spawn } from "child_process";

function toString(data: Buffer): string {
  if (data && data.byteLength > 0 && data.byteLength % 2 == 0 && data[1] == 0) {
    return data.toString("utf16le");
  } else {
    return data.toString();
  }
}
export function launchApp(winappdriver: string) {
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
    process.stdin.resume();
  }
  process.stdin.on("data", process.exit.bind(process, 0));
  var args = process.argv.slice(2);
  const dir = dirname(winappdriver);
  const child = spawn(winappdriver, args, { cwd: dir });

  child.stdout.on("data", (data) => {
    console.log(toString(data));
  });

  child.stderr.on("data", (data) => {
    console.error(toString(data));
  });

  child.on("error", (error) => {
    console.error(error.toString());
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
