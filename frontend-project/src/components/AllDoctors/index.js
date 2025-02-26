import './index.css';
import Headers from '../Headers';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllDoctors = () => {     
    const [adddoctor, setAddDoctor] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002')
        .then(result => setAddDoctor(result.data))
        .catch(err => console.log(err))
    })
    
    return (
        <div>
            <Headers/>
                <div className='DoctordContainer'>
                    <h1 className='DoctorMainHeading'>All Doctors Specialist</h1>
                    <ul className='DoctorsUl'>
                        <li>
                            <button type='button' className='changeButton'>General physician</button>
                        </li>
                        <li>
                            <button type='button' className='changeButton'>Gynecologist</button>
                        </li>
                        <li>
                            <button type='button' className='changeButton'>Dermatologist</button>
                        </li>
                        <li>
                            <button type='button' className='changeButton'>Pediatricians</button>
                        </li>
                        <li>
                            <button type='button' className='changeButton'>Neurologist</button>
                        </li>
                        <li>
                            <button type='button' className='changeButton'>Gastroenterologist</button>
                        </li>
                    </ul>
                    <ul className='DoctorsUl1'>
                        {adddoctor.map(eachList => {
                    return (
                        <li className='DoctorsLi'>
                            <Link to={`/GetDoctorsDetails/${eachList._id}`} className='LinkElement'>
                                <img src={eachList.image} alt='doctorImage' className='DoctorsImage'/>
                                <h1 className='DoctorAHead'>Avaliable</h1>
                                <h1 className='DoctorName'>{eachList.name}</h1>
                                <p className='DoctorSpeciality'>{eachList.speciality}</p>
                            </Link>
                        </li>
                        )
                        })
                    }
                    </ul>
                </div>
        </div>
    )
}

export default AllDoctors