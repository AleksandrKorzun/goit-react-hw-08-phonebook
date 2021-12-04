import { Link } from "react-router-dom";
import { fetchSignUp } from "../services/api-contacts";
import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router";
import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { signInOperation, signUpOperation } from "../redux/auth/authOperations";

const initialState = {
    name: "",
    email: "",
    password: "",
}

const SignUpPage = () => {
    const [user, setUser] = useState({
        ...initialState
    })
    const location = useLocation()
    const dispatch = useDispatch()

    const onHandleChange = (e) => {
        const {name, value} = e.target
        setUser((prev)=>({...prev, [name]: value}))
    };

    const onHandleSubmit = (e) => {
        e.preventDefault()
        location.pathname === "/register" ? dispatch(signUpOperation(user)) : dispatch(signInOperation(user))
        setUser(initialState)
    }
    return (
        <>
        {location.pathname === "/register" &&
         <>
            <h1>Зарегистрироваться</h1>
            <h3>Уже есть аккаунт? <Link to={'/login'}>Вход</Link></h3>
        </>
        }
            <Form onSubmit={onHandleSubmit}>
            {location.pathname === "/register" &&
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={onHandleChange}/>
                </Form.Group>
            }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={onHandleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={onHandleChange}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>

    );
}

export default SignUpPage;