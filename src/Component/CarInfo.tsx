import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import "./CarInfo.css"
import data from '../CarData/CarData.json'
import carImage from "../images/bmwx5.jpg"
import internalDesign from "../images/internalDesign.jpg"
import { Link  } from "react-router-dom";
import { Button } from '@mui/material';
import Footer from './Footer';
export default function CarInfo()  {

    const location = useLocation();

   // const carName = location.state; 
   const  id = location.state;



   const param = useParams()
   const fileterdData =  data.filter(data=>{
    
    console.log("localStorage", localStorage.getItem('id'));

    console.log("id", id); 
    console.log("dataId" , data.id);  
    return data.id==localStorage.getItem('id')});
   
   console.log("id" , id)
   
   console.log("data" , data)

   console.log("filteredData   ", fileterdData);


    return (
        <div>
            <div className='header'>

        </div>

        {fileterdData.map((fileterdData) => (
        <div >
            <div className='carHeadings'>
            <div className= "carName">
                {fileterdData.carName}
            </div>
            <div className = "carSpecification">
                Car Specifications 
            </div>
            </div>
            <div className='carDetails'>
                <div className='carPhoto'>
                <img className='carPhoto' src={carImage}></img>
                </div>
                <div className='carDetailsInfo'>
                 <div>
                     <div className="infoHed">
                         Fuel Type
                     </div>
                     <div className='infoValue'>
                     {fileterdData.fuelType}
                     </div>
                     
                 </div>
                 <div>
                     <div className="infoHed">
                         Engine
                     </div>
                     <div  className='infoValue'>
                     {fileterdData.engine}
                         </div>
                     
                 </div>    
                 <div className='tourque'>
                     <div className="infoHed">
                         Tourque
                     </div>
                     <div  className='infoValue'>
                     {fileterdData.torque}
                         </div>
                     
                 </div>
                 <div className='acceleration'>
                     <div className="infoHed">
                         Accelaration
                     </div>
                     <div  className='infoValue'>
                     {fileterdData.acceleration}
                         </div>
                     
                 </div>
                 <div className='topSpeed'>
                    <div className="infoHed">
                         Top Speed 
                     </div>
                     <div  className='infoValue'>
                     {fileterdData.topSpeed}
                         </div>
                     
                 </div>
                 <div className='varients'>
                     <div className="infoHed">
                         Varients
                     </div>
                     <div  className='infoValue'>
                     {fileterdData.varients}
                     </div>
                     
                 </div>
                </div>
            </div>
            <div className='interiorSection'>
             <div className="heading">   
            <div>
            <img className="internalDesignPhoto" src={internalDesign}/>    
            </div>
            <div className='interiorFinishes'>
                Interior finishes
            </div>       
            </div>
            <div className='interiorInfo'>
                {fileterdData.interiorInfo}
            </div>
            </div>
            <div className="priceTag">
                <div className="priceHeading">
                    Cost
                </div>
                <div className="priceValueHeading">
                {fileterdData.price}
                </div>
            </div>
            <div className='bookNowButton'>
            {fileterdData.bookingStatus == "Booked" ? "" : <Button>
            <Link to={'/bookForm'}>Book Now</Link>
            </Button> 
            }
            
            </div>   
            <Footer/>
        </div>
    ))}


            
            
        </div>
    );
}