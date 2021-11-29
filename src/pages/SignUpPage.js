import { Link } from "react-router-dom";
import { fetchSignUp } from "../services/api-contacts";
import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router";
const SignUpPage = () => {
    const location = useLocation()
    console.log(location)
    // {fetchSignUp()}
    return (
        <>
        {location.pathname === "/register" &&
         <>
            <h1>Зарегистрироваться</h1>
            <h3>Уже есть аккаунт? <Link to={'/login'}>Вход</Link></h3>
        </>
        }
            <Form>
            {location.pathname === "/register" &&
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>
            }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>

    );
}

export default SignUpPage;