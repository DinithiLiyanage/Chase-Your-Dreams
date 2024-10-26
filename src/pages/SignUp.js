import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Auth_img from "../assets/SignIn.jpg";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from "react-bootstrap/esm/Button";
import signinValidations from "../validations/signinValidations";
import "../styles/SignInUp.css";
import { Link } from "react-router-dom";
import userSignup from "../hooks/userSignup";

function SignUp() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, error, registerUser] = userSignup();

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });

  const handleSubmission = (values) => {
    registerUser(values);
    validate;

  }

  // Validate user information
  function validate(e) {
    e.preventDefault(); // Prevent form submission
    const validationErrors = signinValidations(email, password);
    setErrors({
      email: validationErrors.emailErrors || [], // Ensure defaults
      password: validationErrors.pwrdErrors || [], // Ensure defaults
    });
  }
  return (
    <div className="block block-SignUp" id="SignIn" style={{ width: "1000px" }}>
      <Container fluid>
        <Row>
          <Col>
            <Image
              src={Auth_img}
              height="100%"
              width={500}
              style={{ paddingRight: 0 }}
            />
          </Col>
          <Col>
            <Container
              fluid
              style={{
                background: "#FFFFFF",
                padding: 20,
                height: "100%",
                width: "100%",
                color: "#000",
                paddingTop: 25,
              }}
            >
              <Row>
                <h2 className="h2">Welcome!</h2>
              </Row>
              <Row>
                <h4 className="h4">Sign up</h4>
              </Row>

              <Form className="align-items-center" style={{ fontSize: "15px" }}>
                <Row>
                  <Col>
                    <FormGroup className="mb-3" controlId="formGroupFname" style={{marginRight: "10px"}}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name here"
                        onChange={(e) => setFName(e.target.value)}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup className="mb-3" controlId="formGroupLname" style={{marginRight: "10px"}}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name here"
                        onChange={(e) => setLName(e.target.value)}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup className="mb-3" controlId="formGroupEmail" style={{marginRight: "10px"}}>
                  <Form.Label>Email Address</Form.Label>
                  {errors.email.length > 0 && (
                    <div className="text-danger">
                      {errors.email.map((error, index) => (
                        <div key={index} style={{ fontSize: "12px" }}>
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                  <Form.Control
                    type="email"
                    placeholder="Enter email here"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </FormGroup>

                <Row>
                  <Col>
                    <FormGroup className="mb-3" controlId="formGroupPassword" style={{marginRight: "10px"}}>
                      <Form.Label>Password</Form.Label>
                      {errors.password.length > 0 && (
                    <div className="text-danger">
                      {errors.password.map((error, index) => (
                        <div key={index} style={{ fontSize: "12px" }}>
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                      <Form.Control
                        type="password"
                        placeholder="Enter password here"
                        onChange={(e) => setPassword(e.target.value)}
                        rules={[{
                          message: 'Password should contain atleast one lowercase, an uppercase, a digit and can have underscores.',
                        }]}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup
                      className="mb-3"
                      controlId="formGroupConfirmPassword"
                      style={{marginRight: "10px"}}
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password here"
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>&nbsp;</Row>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className="btn" type={loading ? '' : 'primary'} htmlType="submit" onSubmit={handleSubmission}>
                    {loading ? <spin/> : 'Sign Up'}
                    {/* Sign Up */}
                  </Button>
                </div>
              </Form>
              
              <Row>&nbsp;</Row>

              <p>
                Already have an account? <a href="/">Sign in here!</a>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
