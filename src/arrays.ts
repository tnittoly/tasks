/*import { totalmem } from "os";*/

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
/*hi*/
export function bookEndList(numbers: number[]): number[] {
    const bookList = [...numbers];
    let final: number[] = [];
    if (bookList.length === 0) {
        return final;
    } else if (bookList.length === 1) {
        final = [bookList[0], bookList[0]];
    } else {
        final = [bookList[0], bookList[bookList.length - 1]];
    }
    return final;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numberArray = numbers.map(Number);
    const finalArray = numberArray.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return finalArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numberArray = amounts.map((word: string): string =>
        word[0] === "$" ? word.substring(1) : word
    );
    const number2Array = numberArray.map(Number);
    const finalArray = number2Array.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return finalArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = messages.filter(
        (msg: string): boolean => msg[msg.length - 1] != "?"
    );
    const finalMessages = newMessages.map((msg: string): string =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg
    );
    return finalMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length > 0) {
        const allColors = colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
        return allColors;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const theNumbers = addends.join("+");
        return sum + "=" + theNumbers;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const allPositive = values.every((num: number): boolean => num > 0);
    if (allPositive === true) {
        const numTotal = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const total = [...values, numTotal];
        return total;
    } else {
        const firstNegative = values.findIndex(
            (num: number): boolean => num < 0
        );
        const clonedValues = [...values];
        clonedValues.splice(firstNegative, values.length - firstNegative);
        const numTotal = clonedValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const total = [...values];
        total.splice(firstNegative + 1, 0, numTotal);
        return total;
    }
}
