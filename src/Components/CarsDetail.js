import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './CarDetail.css'

const CarsDetail = (props)=>{

    const { id } = useParams()
    const [detail, setDetail] = useState([])

    useEffect(()=>{
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((res) =>{
                setDetail(res.data)
            
            })
            .catch((err)=> console.log(err.message))
    },[])

    return ( 
        <div className="car-card-detail">
            <div className="card">
                <h5 className="car-card-detail">Tentang Paket</h5>
                <div className="car-card-desc">
                    <div>
                        <p className="car-card-include">Include</p>
                    </div>
                    <div>
                        <ul className="text-detail">
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="car-card-exclude">Exclude</p>
                    </div>
                    <div>
                        <ul className="text-detail">
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="cardetail-desc-title-paket-p">Refund, Reschedule, Overtime</p>
                    </div>
                    <div>
                        <ul className="text-detail">
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li> Tidak termasuk akomodasi penginapan</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li> Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li> Tidak termasuk akomodasi penginapan</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div>
                {
                    Object.entries(detail).length ? (
                        <div className="car-search-detail">
                            <div className="cardetail-img">
                                <img src={detail.image} alt={detail.name} className='img-detail'/>
                            </div>
                            <div className="cardetail-result-desc">
                                <div className="cardetail-result-title-p-bg">
                                    <p className="cardetail-result-title-p">{detail.name}</p>
                                </div>
                                <div className="cardetail-result-price-bg">
                                    <div>
                                        <p className="cardetail-result-total-p">Total</p>
                                    </div>
                                    <div className="cardetail-result-price-p-bg">
                                        <p className="cardetail-result-price-p">Rp.{detail.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(<div className='carsshow-loading'></div>)
                }
            </div>
        </div>
    );

    

}

export default CarsDetail;