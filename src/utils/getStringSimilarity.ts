import * as stringSimilarity from "string-similarity";

// Allow 80 % match in any entry in give array of strings
export function allowMatch(input: string, controls: string[]) {
    return controls.some(control => stringSimilarity.compareTwoStrings(input.trim().toLocaleLowerCase(), control.trim().toLocaleLowerCase()) >= 0.8)
}

