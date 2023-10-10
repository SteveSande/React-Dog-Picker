import { atom } from "jotai";

export const darkModeAtom = atom(localStorage.getItem('darkMode') === 'true' || false);
