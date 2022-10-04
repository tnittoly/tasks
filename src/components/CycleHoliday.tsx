import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "🎄" | "🕛" | "🐇" | "🎃" | "🦃";

const alphabetChange_Holiday: Record<Holidays, Holidays> = {
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "🕛",
    "🕛": "🦃",
    "🦃": "🎄"
};

const timeChange_Holiday: Record<Holidays, Holidays> = {
    "🎄": "🕛",
    "🕛": "🐇",
    "🐇": "🎃",
    "🎃": "🦃",
    "🦃": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holidays>("🎄");
    function changeAlphabet(): void {
        const newHoliday = alphabetChange_Holiday[holiday];
        setHoliday(newHoliday);
    }
    function changeTime(): void {
        const newHoliday = timeChange_Holiday[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={changeAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeTime}>Advance by Year</Button>
        </div>
    );
}
