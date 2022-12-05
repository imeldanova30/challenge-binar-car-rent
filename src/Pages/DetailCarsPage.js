import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchCars from '../Components/SearchCars';
import CarsDetail from '../Components/CarsDetail';



const DetailCarsPage = () =>{

    const[fName,setFname] = useState('')
    const handleChangeName =(e)=>{
        setFname(e.target.value)
    }

    const[fCategory,setFCategory] = useState('')
    const handleChangeCategory =(e)=>{
        setFCategory(e.target.value)
    }

    const[fMinPrice,setFMinPrice] = useState('')
    const handleMinPrice =(e)=>{
        setFMinPrice(e.target.value)
    }

    const[fMaxPrice,setFMaxPrice] = useState('')
    const handleMaxPrice =(e)=>{
        setFMaxPrice(e.target.value)
    }

    const [fStatus, setFStatus] = useState('')
    const handleStatus = (e) => {
        setFStatus(e.target.value)
    }

    return(
        <div>
            <NavBar />
            <Header isContentShow={false}/>
            <SearchCars isInputDisable={true} isHeaderShow={false}/>
            <CarsDetail
                isInputDisable={true} 
                isHeroShow={false}
                isBtnShow={false}
                fCategory={fCategory}
                fName={fName}
                fMinPrice={fMinPrice}
                fMaxPrice={fMaxPrice}
                fStatus={fStatus}
            />
            <Footer />
        </div>
    )

}

export default DetailCarsPage;