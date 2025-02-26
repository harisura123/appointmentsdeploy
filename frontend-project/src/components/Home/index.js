import './index.css'
import Headers from '../Headers'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Home(){
    const [addpatient, setAddpatient] = useState([])
    
    useEffect(() => {
    axios.get('http://localhost:3002/addpatient')
        .then(result => setAddpatient(result.data))
        .catch(err => console.log(err))
    })

    
    const handledelete = id => {
        axios.delete("http://localhost:3002/userdelete/"+id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
    <>
    <Headers />
    <div className='User_div'>
        <div className='User_div_1'>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>PatientName</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>DoctorName</th>
                    <th>AppointmentType</th>
                    <th>Date&Time</th>
                    <th>Duration</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {addpatient.map((user, index) => {
                    return <tr>
                        <td className='tdHeading'>{index+1}</td>
                        <td className='tdHeading'>{user.patientName}</td>
                        <td className='tdHeading'>{user.age}</td>
                        <td className='tdHeading'>{user.gender}</td>
                        <td className='tdHeading'>{user.name}</td>     
                        <td className='tdHeading'>{user.speciality}</td>
                        <td className='tdHeading'>{user.date},{user.time}</td>
                        <td className='tdHeading'>60min</td>
                        <td className='tdContainer'>
                            <button type='button' className='updateBtn'><Link to={`/update/${user._id}`} className='LinkElement'>Edit</Link></button>
                            <button type='button' className='delBtn' onClick={e => handledelete(user._id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
        </table>
        </div>
    </div>
    </>
)
}

export default Home
