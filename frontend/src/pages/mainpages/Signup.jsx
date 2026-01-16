import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import imgsign from '../../assets/signup-g.svg';
import styles from '../../styles/Landing/signup.module.css';
const { customcontainer , img} = styles;

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
      <div className= 'container mb-5 d-flex align-items-center justify-content-evenly'>
          <div className={`${img} w-50  mx-5`}>
            <img src={imgsign}/>
          </div>
          <div className={`${customcontainer} my-5 container`}>
            <div>
              <h2 className="text-success">Get Start Shopping</h2>
              <h6 style={{color:'rgb(92, 108, 117)'}}>Welcome to Our eCoshop! Enter your email to get started.</h6>
            </div>
            <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="formBasicName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First name"
                      {...register("firstName", { required: "First Name is required" })}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="formBasicLastName" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last name"
                      {...register("lastName", { required: "Last Name is required" })}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                          message: "Password must be at least 8 characters long and contain a number"
                        }
                      })}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmedPassword", {
                        required: "Please confirm your password",
                        validate: value =>
                          value === password || "Passwords do not match"
                      })}
                      isInvalid={!!errors.confirmedPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmedPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-center">
                <Button as={Link} to="/user" variant="success" type="submit" className="w-50 w-lg-25">
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
      </div>
  );
};

export default Signup;
