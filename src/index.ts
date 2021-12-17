import { note } from "./note";
import { getTodos, todo } from "./todo";
import config from "../config.json";
import fs from "fs";

// Check that there's text
if (process.argv.length <= 2) process.exit(0);

// Check for directories existence
try {
  fs.accessSync(config.dir);
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.error("Directory not found");
  }
  process.exit(0);
}

switch (process.argv[2]) {
  case "-t":
    todo(process.argv.slice(3).join(" "));
    break;
  case "-l":
    getTodos();
    break;
  default:
    note(process.argv.slice(2).join(" "));
}
