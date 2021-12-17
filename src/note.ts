import { TODAY_FILE } from "./constants";
import { createOrAppend } from "./helpers";

export function note(note: string) {
  createOrAppend(TODAY_FILE, note, "Note");
}
