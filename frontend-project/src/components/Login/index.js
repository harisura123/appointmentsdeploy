import './index.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login(){
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const navigate = useNavigate()
    const onLoginData = event => {
        event.preventDefault()
        axios.post('http://localhost:3002/login', {username, password})
        .then(result => {console.log(result)
            if(result.data === 'Success'){
            navigate('/home')
            }else{
                setErrorMsg(result.data)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <form className='formContainer' onSubmit={onLoginData}>
            <h1 className='formHeading'>Admin Login</h1>
            <div className='LoginContainer'>
                <img src = 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC4D0BAQFOtGwIejdWoA%2Fcompany-logo_200_200%2Fcompany-logo_200_200%2F0%2F1675287615642%3Fe%3D1748476800%26v%3Dbeta%26t%3DE5RThk7j1jBEAlY3Mt-t7Wua9rhimGhOJO-Da9ivPBA' alt='appointment' className='LogoImage1'/>
            <div className='LoginContainer1'>
                <label htmlFor='Username' className='loginlabel'>Username</label>
                <input type='text' id='Username' className='logininput' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username'/>
                <label htmlFor='Password' className='loginlabelP'>Password</label>
                <input type='password' id='Password' className='logininput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
                <button type='submit' className='loginbutton'>Login</button>
                <p className='loginpara'>Already Have an Account</p>
                <button type='button' className='signbutton'><Link to='/register' className='LinkElement'>SignUp</Link></button>
            </div>
            <p className='LoginError'>{errorMsg}</p>
            </div>
        </form>
    )
}

export default Login