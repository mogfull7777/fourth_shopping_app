import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [thisChackBox, setThisChackBox] = useState(false);

    const loginSubmitHendle = async (e) => {

        e.preventDefault()

        try {

            if (password === "") {
                alert("please write password")
            }

            const loginList = {
                email : email,
                password : password,
                thisChackBox : thisChackBox
            }

            // console.log(loginList)

            const {data, status} = await axios.post("http://localhost:9090/api/users/login", loginList)

            if (status === 200) {
                alert("login success")

                localStorage.setItem("token", data.token)

                navigate("/profile")

            }

            console.log("------------",data, status)


        } catch (err) {

            console.log(err)

        }

    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6} className={"mt-5"}>
                    <h1>LOGIN</h1>
                    <Form onSubmit={loginSubmitHendle}>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
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


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="remember id?"
                                value={thisChackBox}
                                onChange={e => setThisChackBox(e.target.checked)}
                            />
                        </Form.Group>


                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                        <Form.Text className="text-muted mt-3">
                            <Link to={'/find/email'}>
                                아이디가 잊어버리셨습니까?
                            </Link>
                            <Link className={'ml-3'} to={'/forgot/password'}>
                                비밀번호를 잊어버리셨습니까?
                            </Link>
                        </Form.Text>


                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;