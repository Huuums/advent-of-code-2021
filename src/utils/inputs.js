import fs from 'fs'
import path from "path";

export function getInput(fileUrl) {
  var input = fs.readFileSync(path.resolve(fileUrl), "utf8");
  return input;
}