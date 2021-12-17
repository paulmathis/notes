import fs from "fs";
import notes from "./notes";
import { getTodos, todos } from "./todos";
import config from "../config.json";

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
    todos(process.argv.slice(3).join(" "));
    break;
  case "-l":
    getTodos();
    break;
  default:
    notes(process.argv.slice(2).join(" "));
}
