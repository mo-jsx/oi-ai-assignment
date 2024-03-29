import { customAlphabet } from "nanoid";

export const getID = () => parseInt(customAlphabet("1234567890", 10)());
