import React from "react"
import "./BookForm.css"
import data from '../CarData/CarData.json'
import { Link  } from "react-router-dom";
import Button from '@mui/material/Button';
import carImage from "../images/bmwx5.jpg"
import Footer from "./Footer";
 class BookForm extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
      contactNumber :"",
      country:"",
      filteredData :"",
     
    };
      // this.handleChange = this.handleChange.bind(this);
      console.log(props.id);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    firsthandler = (event) =>{
      this.setState({
        firstName :event.targer.value
      })
    }

     fileterdData = data.filter(data=>{
    
      console.log("localStorage", localStorage.getItem('id'));
  
      console.log("dataId" , data.id);  
      return data.id===localStorage.getItem('id')}); 
    
    contacthandler = (event) =>{
      this.setState({
        contactNumber :event.targer.value
      })
    }

    
    countryhandler = (event) =>{
      this.setState({
        country :event.targer.value
      })
    }

    
  
   handleSubmit =(event) =>{
   console.log(this.state);
   this.setState({
  
    firstName: "",
    contactNumber:"",
    country:""
   })
   event.preventDefault()
   }
  
  
    render() {
      return (
        <div >
          <div className="selectedCarDetails" >
            <div className="carDetailHeading">
            Car Details
            </div>
            <div>
            <img className="selectedCarImg" src={carImage}></img>
            </div>
          {
          this.fileterdData.map((filetData) => (
          <div>
          <div className="carNameBold">
            {filetData.carName}
          </div>
          <div className="cardetailInfo">
                         Fuel Type
                     </div>
                     <div className='cardetailInfoValue'>
                     {filetData.fuelType}
            </div>
            <div>
                     <div className="cardetailInfo">
                         Engine
                     </div>
                     <div  className='cardetailInfoValue'>
                     {filetData.engine}
                         </div>
                     
                 </div> 
                 <div className="viewAllplan">
                 <Link to={'/viewAll'}>View All Plan</Link>  
                 </div>
        </div>
          ))
          }
          </div>
        <div className="form">
          <div className="heading">
            Booking Details 
          </div>
          <div className="formDetail">

        <form  onSubmit={this.handleSubmit}>
          <div className="name">
          <label>
            Name:
            </label>
            <div>
            <input type="text"  onChange={this.handleChange} required/>        
            </div>
            
            </div>
            <div className="contact">
          <label className="contact">
          Contact Number :
          </label>
          <div>
            <input type="number"  onChange={this.contacthandler} required/> 
            </div>
          </div>
          <div className="country">
          <label className="country">
          Country :
          </label>
          <div>
            <select onChange={this.countryhandler} defaultValue="Select Country" required>
              <option defaultValue> Select Country </option>
              <option value="India">India </option>
              <option value="US"> US </option>
            </select>
          </div>
          </div>
          <div className="submit">
          <Button className="bookNow">
          <Link className="sub" to={'/bookingSuccessfull'}>Submit</Link>
          </Button>
          </div>
        </form>
        </div>
        </div>
        <Footer/>
        </div>
      );
    }
  }
  export default BookForm;