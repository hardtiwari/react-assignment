import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MediaCard.css"
import data from '../CarData/CarData.json'
import { useState } from 'react';
import CarInfo from './CarInfo';
 import bmwx5 from "../images/bmwx5.jpg"
 import  arraow from "../images/arrow.png"
 import { Link, useNavigate  } from "react-router-dom";
import Footer from './Footer';


export default function MediaCard(props:any)  {
  console.log("Hi",data);
  // var requi = require('json!../CarData/CarData.json');
   console.log("Require",props);

   const navigate = useNavigate();
  
   function  carInfo(data :any){
      navigate("/carInfo",data);
    }

    function saveLocal(id:any){
      localStorage.removeItem('id');
      localStorage.setItem('id',id);
    }
   const [value,setValue] = useState(0);

   const fileterdData = data.filter(carData=>{return carData.bookingStatus=='Booked' && props.category=='popular'});

   const justLaunchedFileterdData = data.filter(carData=>{return props.category=='recent'});
   
   const upComingFileterdData = data.filter(carData=>{return carData.launched=='no' && props.category=='upcoming'});

   const viewAllFileterdData = data.filter(carData=>{return props.category=='viewAll'});

   const sedanFileterdData = data.filter(carData=>{return carData.category=='Sedan' && props.category=='Sedan'});

   const suvFileterdData = data.filter(carData=>{return carData.category=='SUV' && props.category=='SUV'});

   const hatchBackFileterdData = data.filter(carData=>{return carData.category=='hatchBack' && props.category=='hatchBack'});

   const coupeFileterdData = data.filter(carData=>{return carData.category=='coupe' && props.category=='coupe'});
   
   const handleChange = ()=>{
    
}
  
   console.log("Filtered Data",fileterdData);

  return (
    
    <tbody className="tbody">
    {fileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card>
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
      </Button>
      
      </CardActions>
      </div>
    </Card>
    </div>
    ))}
    {justLaunchedFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}
    {upComingFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <CarInfo carName = {fileterdData.carName} fuelType = {fileterdData.fuelType}  engine = {fileterdData.engine}  tourque = {fileterdData.torque} acceleraion = {fileterdData.acceleration} topSpeed = {fileterdData.topSpeed}  varients = {fileterdData.varients} bookingStatus = {fileterdData.bookingStatus}  launched = {fileterdData.launched} />   */}
        {/* <Button size="small" onClick={carInfo(fileterdData)}>
        
        Know More
        </Button> */}
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}


    {viewAllFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <CarInfo carName = {fileterdData.carName} fuelType = {fileterdData.fuelType}  engine = {fileterdData.engine}  tourque = {fileterdData.torque} acceleraion = {fileterdData.acceleration} topSpeed = {fileterdData.topSpeed}  varients = {fileterdData.varients} bookingStatus = {fileterdData.bookingStatus}  launched = {fileterdData.launched} />   */}
        {/* <Button size="small" onClick={carInfo(fileterdData)}>
        
        Know More
        </Button> */}
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}

{sedanFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <CarInfo carName = {fileterdData.carName} fuelType = {fileterdData.fuelType}  engine = {fileterdData.engine}  tourque = {fileterdData.torque} acceleraion = {fileterdData.acceleration} topSpeed = {fileterdData.topSpeed}  varients = {fileterdData.varients} bookingStatus = {fileterdData.bookingStatus}  launched = {fileterdData.launched} />   */}
        {/* <Button size="small" onClick={carInfo(fileterdData)}>
        
        Know More
        </Button> */}
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}

{hatchBackFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <CarInfo carName = {fileterdData.carName} fuelType = {fileterdData.fuelType}  engine = {fileterdData.engine}  tourque = {fileterdData.torque} acceleraion = {fileterdData.acceleration} topSpeed = {fileterdData.topSpeed}  varients = {fileterdData.varients} bookingStatus = {fileterdData.bookingStatus}  launched = {fileterdData.launched} />   */}
        {/* <Button size="small" onClick={carInfo(fileterdData)}>
        
        Know More
        </Button> */}
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}

{coupeFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <CarInfo carName = {fileterdData.carName} fuelType = {fileterdData.fuelType}  engine = {fileterdData.engine}  tourque = {fileterdData.torque} acceleraion = {fileterdData.acceleration} topSpeed = {fileterdData.topSpeed}  varients = {fileterdData.varients} bookingStatus = {fileterdData.bookingStatus}  launched = {fileterdData.launched} />   */}
        {/* <Button size="small" onClick={carInfo(fileterdData)}>
        
        Know More
        </Button> */}
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}

{suvFileterdData.map((fileterdData) => (
      <div className="cardHolder">
      <Card >
      <CardMedia
        component="img"
        height="140"
        width="300"
        src={bmwx5}
        alt="green iguana"
      />
      <div className="detailAction">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fileterdData.carName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fileterdData.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <CarInfo carName = {fileterdData.carName} fuelType = {fileterdData.fuelType}  engine = {fileterdData.engine}  tourque = {fileterdData.torque} acceleraion = {fileterdData.acceleration} topSpeed = {fileterdData.topSpeed}  varients = {fileterdData.varients} bookingStatus = {fileterdData.bookingStatus}  launched = {fileterdData.launched} />   */}
        {/* <Button size="small" onClick={carInfo(fileterdData)}>
        
        Know More
        </Button> */}
        <Button size="small" className="knowMore">
        <Link to={'/carInfo'} onClick={() => saveLocal(fileterdData.id)}>
        <input type="image" className="arr" src={arraow} />
        </Link>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    ))}
    
  </tbody>
     
          
     
    
  
  );
}
