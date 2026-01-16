import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            defaultValue="test-user@gmail.com"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            defaultValue="123456@123456"
          />
        </Form.Group>

        <Button
          as={Link}
          to="/user"
          variant="outline-success"
          type="submit"
          className="w-100"
        >
          Sign In
        </Button>
      </Form>


      <div className="mt-3 text-center">
        <p>
          Do not have an account? <Link to="/signup" className='text-decoration-none text-success'>Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
