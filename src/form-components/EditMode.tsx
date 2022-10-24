import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [isNot, setIsNot] = useState<boolean>(true);

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsNot(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-check"
                checked={edit}
                onChange={updateEdit}
            />
            <div>
                {edit ? null : (
                    <div>
                        <Form.Group controlId="textbox">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label="Student?"
                                checked={isNot}
                                onChange={updateStudent}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div>
                {name} is {isNot ? "a" : "not a"} student
            </div>
        </div>
    );
}
