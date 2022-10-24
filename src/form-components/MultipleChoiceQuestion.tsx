import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    let show = "";
    if (choice === expectedAnswer) {
        show = "✔️";
    } else {
        show = "❌";
    }
    // This is the View
    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select Answer</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                </Form.Select>
            </Form.Group>
            {show}
        </div>
    );
}
