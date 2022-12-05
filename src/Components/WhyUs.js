
import './WhyUs.css'

const WhyUs = (props) => {
    return(
        <div className='whyus'>
            <div>
                <div className='whyus-title'>
                    <p className='whyus-title-p'>Why Us?</p>
                </div>
                <div className='whyus-desc'>
                    <p className='whyus-desc-p'>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className='whyus-card-content'>
                        {
                            props.whyUsCardText.map(item => {
                                return(
                                    <div className='whyus-card'>
                                        {item.icon}
                                        <div className='whyus-card-title'>
                                            <h5 className='whyus-card-title-h5'>{item.title}</h5>
                                        </div>
                                        <div className='whyus-card-desc'>
                                            <p className='whyus-card-desc-p'>{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default WhyUs;