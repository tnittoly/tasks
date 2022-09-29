import { Options } from "prettier";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newQuestion = [...questions];
    const pubQuestion = newQuestion.filter(
        (publish: Question): boolean => publish.published
    );
    return pubQuestion;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newQuestion = [...questions];
    const nonQuestion = newQuestion.filter(
        (empty: Question): boolean =>
            !(
                empty.body === "" &&
                empty.expected === "" &&
                empty.options.length === 0
            )
    );
    return nonQuestion;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const newQuestion = [...questions];
    const pubQuestion = newQuestion.findIndex(
        (num: Question): boolean => num.id === id
    );
    if (pubQuestion >= 0) {
        const idQuestion = newQuestion[pubQuestion];
        return idQuestion;
    } else {
        return null;
    }
}
/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newQuestion = [...questions];
    const pubQuestion = newQuestion.filter(
        (num: Question): boolean => !(num.id === id)
    );
    return pubQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newQuestion = [...questions];
    const questionNames = newQuestion.map(
        (name: Question): string => name.name
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const newPoints = [...questions];
    const totalPoints = newPoints.reduce(
        (currentSum: number, point: Question) => currentSum + point.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const newQuestion = [...questions];
    const pubQuestion = newQuestion.filter(
        (publish: Question): boolean => publish.published
    );
    const totalPoints = pubQuestion.reduce(
        (currentSum: number, point: Question) => currentSum + point.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const newList = [...questions];
    const questionCSV = newList
        .map(
            (input: Question): string =>
                `${input.id},${input.name},${input.options.length},${input.points},${input.published}`
        )
        .join("\n");
    return "id,name,options,points,published" + "\n" + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newList = [...questions];
    interface Answer {
        questionId: number;
        text: string;
        submitted: boolean;
        correct: boolean;
    }
    const fullCollection: Answer[] = newList.map(
        (movie: Question): Answer => ({
            questionId: movie.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return fullCollection;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newList = [...questions];
    const publishEvery = newList.map(
        // The parentheses around the curly braces are CRITICAL!
        (movie: Question): Question => ({ ...movie, published: true })
    );
    return publishEvery;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const newList = [...questions];
    const multi = newList.filter(
        (ques: Question): boolean => ques.type === "multiple_choice_question"
    );
    const short = newList.filter(
        (ques: Question): boolean => ques.type === "short_answer_question"
    );
    if (multi.length === 0 || short.length === 0) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newList = [...questions];
    const finalList = [
        ...newList,
        {
            id: id,
            name: name,
            type: type,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];
    return finalList;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const diffList = [...questions];
    return diffList.map(
        (num: Question): Question => ({
            ...num,
            name: num.id === targetId ? newName : num.name
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const diffList = [...questions];
    const finalList = diffList.map(
        (num: Question): Question => ({
            ...num,
            type: num.id === targetId ? newQuestionType : num.type
        })
    );
    if (newQuestionType === "short_answer_question") {
        const final2List = finalList.map(
            (num: Question): Question => ({
                ...num,
                options: num.id === targetId ? [] : num.options
            })
        );
        return final2List;
    } else {
        return finalList;
    }
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const diffList = [...questions];
    const newList = diffList.map(
        (num: Question): Question => ({ ...num, options: [...num.options] })
    );
    if (targetOptionIndex === -1) {
        const finalList = newList.map(
            (num: Question): Question => ({
                ...num,
                options:
                    num.id === targetId
                        ? [...num.options, newOption]
                        : num.options
            })
        );
        return finalList;
    } else {
        const findTarget = newList.findIndex(
            (num: Question): boolean => num.id === targetId
        );
        newList[findTarget].options[targetOptionIndex] = newOption;
        return newList;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const diffList = [...questions];
    const newList = diffList.map((num: Question): Question => ({ ...num }));

    const findTarget = newList.find(
        (num: Question): boolean => num.id === targetId
    );
    const Target = newList.findIndex(
        (num: Question): boolean => num.id === targetId
    );

    if (findTarget != undefined) {
        const newQuestion = {
            ...findTarget,
            id: newId,
            name: "Copy of " + findTarget.name
        };
        newList.splice(Target + 1, 0, newQuestion);
    }
    return newList;
}
