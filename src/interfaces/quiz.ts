import { Question } from "./question2";

export interface Quiz {
    id: number;
    title: string;
    body: string;
    published: boolean;
    questionList: Question[];
}
