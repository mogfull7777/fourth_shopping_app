import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const emailsubmitHendle = async(e) => {

        e.preventDefault()

        try {

            const emailList = {email}

            console.log(emailList)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6} className={"mt-5"}>

                    <h1>Forgot Password</h1>

                    <Form onSubmit={emailsubmitHendle}>

                        <Form.Group>
                            <Form.Text className="text-muted mt-3">
                                가입 시 사용한 핸드폰 번호를 입력해주세요. (- 포함)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="jystore@jystore.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;