import CarImage from '../Assets/img_car.png'
import SearchCarsPage from '../Pages/SearchCarsPage'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    return(
        <div className="header-section">
            <div className='header-card'>
                <div className='header-title-bg'>
                    <h1 className='header-title-h1'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                </div>
                <div className='header-card-bg'>
                    <p className='header-card-p'>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                </div> 
                <div>
                    {
                        props.isBtnShow ?
                        (<Link to={'/searchcar'}>
                        <button className='header-button'>Mulai Sewa Mobil</button>
                        </Link>):null
                    }
                    
                </div>
            </div>
            <div>
                <img src={CarImage} alt='header-car' className='header-image-img'/>
            </div>
        </div>
    )
}

export default Header;