import { dir } from "../config.json";
import getToday from "./date";

export const TODAY_FILE = `${dir}/${getToday()}.txt`;
export const TODO_FILE = `${dir}/todo.txt`;
