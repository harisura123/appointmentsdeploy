import './index.css';
import Headers from '../Headers';
import {useState, useEffect} from 'react';
import {  useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
function GetDoctorsDetails(){     
    const {id} = useParams()
    const [image, setImage] = useState()
    const [name, setName] = useState()
    const [speciality, setSpeciality] = useState()
    const [email, setEmail] = useState()
    const [degree, setDegree] = useState()
    const [experience, setExperience] = useState()
    const [fees, setFees] = useState()
    const [about, setAbout] = useState()
    const [patientName, setPatientName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const navigate = useNavigate()
    useEffect(() => {
       axios.get('http://localhost:3002/getDoctors/'+id)
        .then(res => {console.log(res)
            setImage(res.data.image)
            setName(res.data.name)
            setSpeciality(res.data.speciality)
            setEmail(res.data.email)
            setDegree(res.data.degree)
            setExperience(res.data.experience)
            setFees(res.data.fees)
            setAbout(res.data.about)
       })
        .catch(err => console.log(err))
    })
    
    const onAddPatient = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3002/addpatient', {name, speciality, patientName, age, gender, date, time})
        .then(result => {console.log(result)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='DetailsMainContainer'>
            <Headers/>
           <div className='DetailsContainer'>
            <img src={image} alt={name} className='DoctorImage1'/>
            <div className='DetailsContainer1'>
                <h1 className='DetailsName'>{name}</h1>
                <div className='DetailsContainer2'>
                <p className='DetailsDegree'>{degree}-</p>
                <p className='DetailsSpeciality'>{speciality}</p>
                <p className='DetailsExperience'>{experience} Years</p>
                </div>
                <h1 className='DetailsAbout'>About ⓘ</h1>
                <p className='DetailAbout'>{about}</p> 
                <p className='DetailsFees'>Appointment fee: ₹{fees}</p>
           </div>
           </div>        
           <div className='AddDetailsContainer'>
            <h1 className='AddDetailsHead'>ADD Patient Details</h1>
            <form className='AddDetailsContainer1' onSubmit={onAddPatient}>
            <img src = 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC4D0BAQFOtGwIejdWoA%2Fcompany-logo_200_200%2Fcompany-logo_200_200%2F0%2F1675287615642%3Fe%3D1748476800%26v%3Dbeta%26t%3DE5RThk7j1jBEAlY3Mt-t7Wua9rhimGhOJO-Da9ivPBA' alt='appointment' className='LogoDetailsImage2'/>
            <div className='AddDetailsContainer2'>
                <div className='AddDetailsContainer3'>
                    <label htmlFor='name' className='loginlabelP'>Doctor Name</label>
                   <input type='text' id='name' className='logininput' value={name} placeholder='Upload Image Text'/>
                </div> 
                <div className='AddDetailsContainer3'>
                    <label htmlFor='speciality' className='loginlabel'>Doctor Speciality</label>
                    <input type='text' id='speciality' className='logininput' value={speciality} placeholder='Enter Name'/>
                </div>
                <div className='AddDetailsContainer3'>
                    <label htmlFor='names' className='loginlabelP'>Enter Patient Name</label>
                    <input type='text' id='names' className='logininput' placeholder='Enter Name' value={patientName} onChange={(e) => setPatientName(e.target.value)}/>
                </div>
                <div className='AddDetailsContainer3'>
                    <label htmlFor='email' className='loginlabelP'>Enter Age</label>
                    <input type='number' id='email' className='logininput' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}/>
                </div> 
                <div className='AddDetailsContainer3'>
                    <label htmlFor='gender' className='loginlabelP'>Enter Gender</label>
                    <input type='type' id='gender' className='logininput' placeholder='Enter Gender' value={gender} onChange={(e) => setGender(e.target.value)}/>
                </div>
                <div className='AddDetailsContainer3'>
                    <label htmlFor='date' className='loginlabelP' placeholder='Select a Date'>Select a Date</label>
                    <input type='date' id='date' className='logininput' value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className='AddDetailsContainer3'>
                    <label htmlFor='time' className='loginlabelP' placeholder='Select a Time'>Select a Time</label>
                    <input type='time' id='time' className='logininput' value={time} onChange={(e) => setTime(e.target.value)}/>
                </div>
            </div>
            <button type='submit' className='BookAppointment'>Book an appointment</button>   
            </form>
        </div>
    </div>
    )
}

export default GetDoctorsDetails