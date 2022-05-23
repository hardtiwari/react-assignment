import React from 'react';
import CarsTab from '../Component/CarsTab';
import "./LandingPage.css"
import rectangle from "../images/rectangle.png"
import car from "../images/mercedies.png"
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
function LandingPage() {
    return (
        <div>
        <div className="wallPaper">
            <img className="rectangle" src={rectangle} />
        </div>
        <div className="carWall">
            <img className="carWall" src={car}/>
        </div>
        <div className="feturedCars">
        Featured Cars
        </div>
        <section className="section1">
        
        <CarsTab/>
        <div className="viewAll">
        <Link to={'/viewAll'}> View all</Link>
         
        </div>
        </section>
        <div className="foot">
        <Footer/>
        </div>
        </div>      
    );
}

export default LandingPage;