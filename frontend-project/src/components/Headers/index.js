import './index.css';
import {Link} from 'react-router-dom';
const Headers = () => (
    <nav className='HeadContainer'>
        <div className='HeadContainer1'>
            <img src='https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC4D0BAQFOtGwIejdWoA%2Fcompany-logo_200_200%2Fcompany-logo_200_200%2F0%2F1675287615642%3Fe%3D1748476800%26v%3Dbeta%26t%3DE5RThk7j1jBEAlY3Mt-t7Wua9rhimGhOJO-Da9ivPBA' alt='appointment' className='LogoImage'/>
            <p className='HeadP'>BabySteps</p>
        </div>
        <ul className='HeadUl'> 
            <li>
                <Link to='/home' className='Headli'>HOME</Link>
            </li>
            <li>
                <Link to='/alldoctors' className='Headli'>ALLDOCTORS</Link>
            </li>
            <li>
                <Link to='/adddoctors' className='Headli'>ADD DOCTOR</Link>
            </li>
        </ul>
        <button className='LogoutButton'>
            <Link to='/login'  className='LinkElement'>Logout</Link>
        </button>
    </nav>
)

export default Headers