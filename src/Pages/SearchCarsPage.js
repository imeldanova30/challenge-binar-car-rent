import { getStepConnectorUtilityClass } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarCard from '../Components/CarCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import SearchCars from '../Components/SearchCars';



const SearchCarsPage = (props) => {
    const[carData,setCarData] = useState([])
    useEffect(()=>{
        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
            .then((res)=>{
                setCarData(res.data.cars)
            })
            .catch((err)=> console.log(err.message))
    },[])

    const handleFilter =(e)=>{
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fMinPrice}&maxPrice=${fMaxPrice}`)
            .then((res)=>{
                setCarData(res.data.cars)
            })
            .catch((err)=> console.log(err.message))
    }

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
            <Header isBtnShow={false} />
            <SearchCars 
                handleSearchButton={handleFilter}
                nameFilter={handleChangeName}
                categoryFilter={handleChangeCategory}
                isInputDisable={false}
                minPriceFilter={handleMinPrice}
                fMinPrice={fMinPrice}
                fStatus={fStatus}
                
            />
            <CarCard allCars={carData}/>
            
            <Footer />
        </div>
    )
}

export default SearchCarsPage;