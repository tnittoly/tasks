import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setValue] = useState<number>(1);
    const [rightDie, setAmount] = useState<number>(4);
    return (
        <div>
            <Button onClick={() => setValue(d6)}>Roll Left</Button>
            <Button onClick={() => setAmount(d6)}>Roll Right</Button>{" "}
            <span data-testid="left-die">{leftDie}</span>{" "}
            <span data-testid="right-die">{rightDie}</span>
            {leftDie != 1 && leftDie === rightDie ? (
                <span>You got doubles! You Win!</span>
            ) : (
                <span></span>
            )}
            <div>
                {leftDie === 1 && leftDie === rightDie ? (
                    <span>You got snake eyes. You Lose.</span>
                ) : (
                    <span>Roll the Die!</span>
                )}
            </div>
        </div>
    );
}
