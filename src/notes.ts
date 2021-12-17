import { TODAY_FILE } from "./constants";
import createOrAppend from "./helpers";

export default function notes(note: string) {
  createOrAppend(TODAY_FILE, note, "Note");
}
