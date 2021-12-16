import fs from "fs";

import config from "../config.json";
import { getToday } from "./date";

const fileName = config.dir + "/" + getToday() + ".txt";

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

// Check that there's text
if (process.argv.length <= 2) process.exit(0);

const text = process.argv.slice(2).join(" ");

// If file exists append the text to it
try {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, "\n\n" + text);
    console.log("Note added:", text);
    process.exit(0);
  }
} catch (err) {
  console.error(err);
}

// If file doesn't exists create it with the text
try {
  fs.writeFileSync(fileName, text);
  console.log("Note added:", text);
  process.exit(0);
} catch (err) {
  console.error(err);
}
