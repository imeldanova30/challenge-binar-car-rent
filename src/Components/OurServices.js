import ServicesImage from '../Assets/img_service.png'
import './OurServices.css'
import CheckList from '../Assets/checklist.svg'

const OurServices = () => {
    return(
        <div className='ourservices-section' id='ourservices'>
            <div className='ourservices-image-bg'>
                <img src={ServicesImage} alt='services' className='ourservices-image-img'/>
            </div>
            <div className='ourservices-desc-bg'>
                <div className='ourservices-title'>
                    <h3 className='ourservices-title-h3'>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                </div>
                <div className='ourservices-text'>
                    <p className='ourservices-text-p'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div className="ourservices-text-ul">
                    <ul>
                        <li><img src={CheckList} alt="checklist-image" /> Sewa Mobil Dengan Supir di Bali 12 jam</li>
                        <li> <img src={CheckList} alt="checklist-image" />Sewa Mobil Lepas Kunci di Bali 12 jam</li>
                        <li> <img src={CheckList} alt="checklist-image" />Sewa Mobil jangka Panjang Bulanan</li>
                        <li> <img src={CheckList} alt="checklist-image" />Gratis Antar-Jemput Mobil di Bandara</li>
                        <li> <img src={CheckList} alt="checklist-image" />Layanan Airport Transfer/Drop In Out</li>
                    </ul>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default OurServices;