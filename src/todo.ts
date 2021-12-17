import { TODO_FILE } from "./constants";
import { createOrAppend } from "./helpers";

export function todo(todo: string) {
  createOrAppend(TODO_FILE, "[ ] " + todo, "Todo");
}
