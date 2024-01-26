import {useMemo} from "react";

/**
 * This utility is to split the title and return the first word
 * as the first item in the array and rest of the title as the second
 */

export const splitTitle = (title) => {
  return useMemo(() => {
    if (!title) return null;

    const splitText = title.split(" ");
    const firstWord = splitText.shift();
    return [firstWord, splitText.join(" ")];
  }, [title]);
};
