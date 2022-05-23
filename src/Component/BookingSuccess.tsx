import React from "react"
import "./BookingSuccess.css"
import carImage from "../images/bmwx5.jpg"
import explore from "../images/explore.png"
import black from "../images/Blackbkg.png"
import outlined from "../images/Outlined.png"
import Footer  from "./Footer"

export default function BookingSuccess()  {
return (
    <div>
        <div className="bookingDashboard">
            <div >
                <img className="carIcon" src= {carImage} />
            </div>
            <div className="bookingSuccessful">
                Booking Successful
            </div>
        </div>
        <div className="carImage">
            <div>
            <img className="exploreIcon" src= {explore} />
            </div>
            <div>
            <img className="black" src= {black} />
            <label className="explore"> Explore More</label>
            <img className="outlined" src= {outlined} />
            </div>
        </div>
        <div className="blackFooter">
        <Footer/>
        </div>
    </div>
);
}
