import React, {useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button , Row , Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Alerts from '../components/Alerts'
import { useDispatch , useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'


function ProfilePage({ history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error , loading , user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {  userInfo } = userLogin

    useEffect(()=>{
        if(!userInfo) {
            history.push('/login')
        }else{
            if(!user || !user.name ){
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch ,history, userInfo , user ])

    const submitHandler = (e) =>{

        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords does not match')
        } else {
        console.log('aha');
        }
    }

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
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
                 <Form.Control  type='password' placeholder='Dr.Strange' value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  >
                  </Form.Control>
               </Form.Group>

               <Form.Group controlId='passwordConfirm'>
                 <Form.Label>Confirm Password</Form.Label>
                 <Form.Control  type='password' placeholder='Confirm...' value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  >

                 </Form.Control>
               </Form.Group>
               <Button type="submit" variant='primary'>Update</Button>
            </Form>
            </Col>
            <Col md={9}>
            <h2>My Orders</h2>
            </Col>
        </Row>
    )
}

export default ProfilePage
