import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [visible, setVisible] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipVisibility(): void {
        if (visible === "short_answer_question") {
            setVisible("multiple_choice_question");
        } else {
            setVisible("short_answer_question");
        }
    }

    if (visible === "short_answer_question") {
        return (
            <div>
                <Button onClick={flipVisibility}>Change Type</Button>
                {visible && <div>Short Answer</div>}
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={flipVisibility}>Change Type</Button>
                {visible && <div>Multiple Choice</div>}
            </div>
        );
    }
}
