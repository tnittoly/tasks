import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [Quiz, setProgress] = useState<boolean>(false);

    function changeQuiz(): void {
        setProgress(!Quiz);
        setValue(value - 1);
    }
    return (
        <div>
            {" "}
            <Button onClick={changeQuiz} disabled={Quiz || value === 0}>
                Start Quiz
            </Button>{" "}
            <Button onClick={() => setProgress(false)} disabled={!Quiz}>
                Stop Quiz
            </Button>{" "}
            <span>
                {" "}
                <Button onClick={() => setValue(1 + value)} disabled={Quiz}>
                    Mulligan
                </Button>{" "}
            </span>
            <span> Attempts Remaining: {value} </span>
        </div>
    );
}
