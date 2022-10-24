import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [request, setRequest] = useState<string>("");
    const [attempts, setAttempts] = useState<number>(3);

    const newRequest = parseInt(request) || 0;

    return (
        <div>
            <Form.Group controlId="Attempt Amount">
                <Form.Label>Add Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    use
                </Button>
                <Button onClick={() => setAttempts(attempts + newRequest)}>
                    gain
                </Button>
                Attempts Remaining: {attempts}
            </div>
        </div>
    );
}
