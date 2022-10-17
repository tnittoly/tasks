import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfStateProps {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}

function Doubler({ dhValue, setDhValue }: DoubleHalfStateProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DoubleHalfStateProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            The current value is: <span>{dhValue}</span>
            <div>
                <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
                <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
            </div>
        </div>
    );
}
