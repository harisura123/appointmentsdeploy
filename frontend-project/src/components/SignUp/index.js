import './index.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
function SignUp() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const onAddElement = event => {
        event.preventDefault()
        axios.post('http://localhost:3002/register', {username, password, email})
        .then(result => {console.log(result)
        navigate('/login')
    })
        .catch(e => console.log(e))
    }
    return (
        <form className='formContainer' onSubmit={onAddElement}>
            <h1 className='formHeading'>Admin Register</h1>
            <div className='SignUpContainer'>
            <img src = 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC4D0BAQFOtGwIejdWoA%2Fcompany-logo_200_200%2Fcompany-logo_200_200%2F0%2F1675287615642%3Fe%3D1748476800%26v%3Dbeta%26t%3DE5RThk7j1jBEAlY3Mt-t7Wua9rhimGhOJO-Da9ivPBA' alt='appointment' className='LogoImage1'/>
                <div className='SignUpContainer1'>
                        <label htmlFor='Username' className='SignUplabel'>Username</label>
                        <input type='text' id="username" className='SignUpinput' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username'/>
                        <label htmlFor='email' className='SignUplabelP'>Email</label>
                        <input type='text' id='email' className='SignUpinput' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
                        <label htmlFor='password' className='SignUplabelP'>Password</label>
                        <input type='password' id='password' className='SignUpinput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
                        <button type='submit' className='signbutton'>Register</button>
                        <p className='SignUppara'>Already Have an Account</p>
                        <button type='submit' className='loginbutton'><Link to='/login' className='LinkElement'>Login</Link></button>
                </div>
            </div>
        </form> 
    )
}

export default SignUp