import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col className="Column1">
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript
                        </header>
                        <h1>This is my new Header!</h1>
                        <p>
                            Edit <code>src/App.tsx</code> and save. Hello World
                            Thomas. This page will automatically reload.
                        </p>
                        <div id="rectangle"></div>
                    </Col>
                    <Col className="Column2">
                        <img
                            className="Picture"
                            src="https://i.pinimg.com/736x/5d/0a/ea/5d0aea01e709f4a51063b5a8bdcdabe2.jpg"
                            alt="Welp, that's all folks!"
                        />
                        <ul className="List">
                            <li>Task 1: Setup the Environemnt</li>
                            <li>Task 2: Create First Branch</li>
                            <li>Task 3: Html and CSS</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
