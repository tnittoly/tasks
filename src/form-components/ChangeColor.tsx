import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("good");

    return (
        <div>
            <Form.Check
                style={{
                    backgroundColor: "red"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                style={{
                    backgroundColor: "orange"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                style={{
                    backgroundColor: "yellow"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                style={{
                    backgroundColor: "green"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                style={{
                    backgroundColor: "blue"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                style={{
                    backgroundColor: "purple"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                style={{
                    backgroundColor: "pink"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="pink"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                style={{
                    backgroundColor: "tan"
                }}
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="chosen"
                label="tan"
                value="tan"
                checked={color === "tan"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
