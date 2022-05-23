import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import LandingPage from './Container/LandingPage';
import MediaCard from './Component/MediaCard';
import CarInfo from './Component/CarInfo';
import BookForm from './Component/BookForm';
import BookingSuccess from './Component/BookingSuccess';
import ViewAll from './Component/ViewAll';

function App() {
  return ( 
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/MediaCard" element={<MediaCard/>}/>
    <Route path="/carInfo" element={<CarInfo/>}/>
    <Route path='/bookForm' element={<BookForm/>}/>
    <Route path='/bookingSuccessfull' element={<BookingSuccess/>}/>
    <Route path='/viewAll' element={<ViewAll/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
