import { Link } from "react-router-dom";
import './CarCard.css'

const CarCard = (props)=>{
    return(
        <div>
            <div className="carcard-bg">
                {
                    !!props.allCars.length ? props.allCars.map((item,i)=>{
                        return(
                            <div className='carcard-item' key={i}>
                                <div>
                                    <img src={item.image} alt={item.name} className='carcard-img'/>
                                </div>
                                <div>
                                    <p className='carcard-title-p'>{item.name}</p>
                                </div>
                                <div>
                                    <p className='carcard-price-p'>Rp.{item.price}/hari</p>
                                </div>
                                <div>
                                    <p className='carcard-desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore at dolore magna aliqua.</p>
                                </div>
                                <div>
                                    <Link to={`/cardetail/${item.id}`}>
                                        <button className='carcard-button'>Pilih Mobil</button>
                                    </Link>
                                </div>
                                
                            </div>
                        )

                    }): (<div className='carcard-loading'></div>)
                }
            </div>
        </div>
    )
}

export default CarCard;