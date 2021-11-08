import React, {useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button , Row , Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Alerts from '../components/Alerts'
import { useDispatch , useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

function RegisterPage({location, history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1]: '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error , loading , userInfo } = userRegister

    useEffect(()=>{
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo , redirect])

    const submitHandler = (e) =>{

        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords does not match')
        } else {
        dispatch(register(name , email, password))
        }
    }

    return (
        <FormContainer>

            <h1>Register</h1>
            {message && <Alerts variant="danger">{message}</Alerts>}
            {error && <Alerts variant="danger">{error}</Alerts>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
            
               <Form.Group controlId='name'>
                 <Form.Label>Your Name</Form.Label>
                 <Form.Control required type='name' placeholder='Tane' value={name}
                  onChange={(e)=>setName(e.target.value)}
                  >
                 </Form.Control>
               </Form.Group>

               
               <Form.Group controlId='email'>
                 <Form.Label>Your Email</Form.Label>
                 <Form.Control required type='email' placeholder='abc@abc.com' value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  >
                  </Form.Control>
               </Form.Group>

               <Form.Group controlId='password'>
                 <Form.Label>Your Password</Form.Label>
                 <Form.Control required type='password' placeholder='Dr.Strange' value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  >
                  </Form.Control>
               </Form.Group>

               <Form.Group controlId='passwordConfirm'>
                 <Form.Label>Confirm Password</Form.Label>
                 <Form.Control required type='password' placeholder='Confirm...' value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  >

                 </Form.Control>
               </Form.Group>
               <Button type="submit" variant='primary'>Register</Button>
            </Form>

            <Row className="py-3">
               <Col>
                  Already Registered? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Sign in</Link>
               </Col>
            </Row>
            
        </FormContainer>
    )
}

export default RegisterPage
