import fs from "fs";
import { TODO_FILE } from "./constants";
import { createOrAppend } from "./helpers";

export function todo(todo: string) {
  createOrAppend(TODO_FILE, "[ ] " + todo, "Todo");
}

export function getTodos() {
  try {
    const todoText = fs.readFileSync(TODO_FILE, "utf8");
    const todoArray = todoText
      .split("\n")
      .filter((todo) => todo !== "" && todo.slice(0, 3) !== "[X]");
    console.log(todoArray.join("\n"));
  } catch (err) {
    console.error(err);
  }
}
