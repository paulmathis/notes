import fs from "fs";

export default function createOrAppend(
  path: fs.PathLike,
  data: string,
  type: string
) {
  const successMessage = `${type} added: ${data}`;

  // If file exists append the text to it
  try {
    if (fs.existsSync(path)) {
      fs.appendFileSync(path, `\n\n${data}`);
      console.log(successMessage);
      process.exit(0);
    }
  } catch (err) {
    console.error(err);
  }

  // If file doesn't exists create it with the text
  try {
    fs.writeFileSync(path, data);
    console.log(successMessage);
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
}
