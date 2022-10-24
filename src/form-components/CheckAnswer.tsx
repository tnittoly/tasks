import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    let show = "";

    if (answer === expectedAnswer) {
        show = "✔️";
    } else {
        show = "❌";
    }
    return (
        <div>
            <Form.Group controlId="Answer">
                <Form.Label>Enter Answer</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {show}
        </div>
    );
}
