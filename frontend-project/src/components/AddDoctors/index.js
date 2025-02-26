import './index.css'
import Headers from '../Headers'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddDoctors(){
    const [image, setImage] = useState()
    const [name, setName] = useState()
    const [speciality, setSpeciality] = useState()
    const [email, setEmail] = useState()
    const [degree, setDegree] = useState()
    const [experience, setExperience] = useState()
    const [fees, setFees] = useState()
    const [about, setAbout] = useState()
    
    const navigate = useNavigate()
        const onAddDoctor = event =>{
        event.preventDefault()
        axios.post('http://localhost:3002/adddoctor', {image, name, speciality, email, degree, experience, fees, about})
        .then(result => {console.log(result)
        navigate('/alldoctors')
    })
    .catch(e => console.log(e))
    }
    return(
        <>
        <Headers/>
        <div className='AddContainer'>
            <h1 className='AddHead'>ADD Doctor Details</h1>
            <form className='AddContainer1' onSubmit={onAddDoctor}>
            <img src = 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC4D0BAQFOtGwIejdWoA%2Fcompany-logo_200_200%2Fcompany-logo_200_200%2F0%2F1675287615642%3Fe%3D1748476800%26v%3Dbeta%26t%3DE5RThk7j1jBEAlY3Mt-t7Wua9rhimGhOJO-Da9ivPBA' alt='appointment' className='LogoImage2'/>
            <div className='AddContainer2'>
                <div className='AddContainer3'>
                    <label htmlFor='image' className='loginlabelP'>Upload Image Text</label>
                    <input type='text' id='image' className='logininput' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Upload Image Text'/>
                </div> 
                <div className='AddContainer3'>
                    <label htmlFor='name' className='loginlabel'>Your name</label>
                    <input type='text' id='name' className='logininput' value={name} onChange={(e) => setName(e.target.value)}  placeholder='Enter Name'/>
                </div>
                <div className='AddContainer3'>
                    <label htmlFor='speciality' className='loginlabelP'>Speciality</label>
                    <input type='text' id='speciality' className='logininput' value={speciality} onChange={(e) => setSpeciality(e.target.value)} placeholder='Enter Speciality'/>
                </div>
                <div className='AddContainer3'>
                    <label htmlFor='email' className='loginlabelP'>Doctor Email</label>
                    <input type='email' id='email' className='logininput' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
                </div>
                <div className='AddContainer3'>
                    <label htmlFor='Degree' className='loginlabelP'>Degree</label>
                    <input type='text' id='Degree' className='logininput' value={degree} onChange={(e) => setDegree(e.target.value)} placeholder='Enter Degree'/>
                </div>
                <div className='AddContainer3'>
                    <label htmlFor='Experience' className='loginlabelP'>Experience</label>
                    <input type='number' id='Experience' className='logininput' value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='Enter Experience'/>
                </div>
                <div className='AddContainer3'>
                    <label htmlFor='fees' className='loginlabelP'>Fees</label>
                    <input type='number' id='fees' className='logininput' value={fees} onChange={(e) => setFees(e.target.value)} placeholder='Enter Fees'/>
                </div>
                <div className='AddContainer3'>
                    <label htmlFor='about' className='loginlabelP'>About Doctor</label>
                    <input type='text' id='about' className='logininput' value={about} onChange={(e) => setAbout(e.target.value)} placeholder='Enter About Doctor'/>
                </div> 
            </div>
            <button type='submit' className='signbutton'>Add</button>   
            </form>
        </div>
        </>
    )
}

export default AddDoctors