import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import login from "./Login";
import {Link} from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConFirmPassword] = useState("");
    const [thisChackBox, setThisChackBox] = useState(false);

    const signUpSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            const signUpList = {
                name : username,
                email : email,
                password : password,
                confirmPassword : confirmPassword,
                thisChackBox : thisChackBox
            };

            console.log(signUpList)

        } catch (err) {

            console.log(err.massage)
        }

    }


    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6} className={"mt-5"}>

                    <h1>SIGN UP</h1>

                    <Form className={'mt-4'} onSubmit={signUpSubmitHendle}>

                        <Form.Group className="mb-3" controlId="formBasicusername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="jystore@jystore.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ConfirmPassword</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={confirmPassword}
                                onChange={e => setConFirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Text className="text-muted">
                                가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
                            </Form.Text>
                            <Form.Text className="text-muted">
                                통합 계정 및 서비스 이용약관, 개인정보처리방침에 동의합니다.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                            <Form.Check
                                ype="checkbox"
                                label="Agree."
                                value={thisChackBox}
                                onChange={e => setThisChackBox(e.target.value)}
                            />
                        </Form.Group>


                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                        <Form.Text className="text-muted mt-3">
                            <Link to={'/login'}>
                                아이디가 있으십니까?
                            </Link>
                        </Form.Text>

                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default Signup;