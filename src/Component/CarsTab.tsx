import React from "react";
import {Box ,Tab} from '@mui/material'
import {TabContext , TabList , TabPanel } from '@mui/lab'
import {useState} from 'react';
import "./CarsTab.css"
import MediaCard from "./MediaCard";

function CarsTab() {
    const routes = ["/MediaCard"];
    
    const [value,setValue] =useState('0')
    const handleChange = (event : React.SyntheticEvent , newValue :string)=>{
        setValue(newValue)
    }
    return (
<div className="carsTab">
<TabContext value={value}>
  <Box className="box" sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Popular" value="popular" />
      <Tab label="Just Launched" value="recent" />
      <Tab label="Upcoming" value="upcoming" />
    </TabList>
  </Box>
  <TabPanel value="popular"><MediaCard category={value}/></TabPanel>
  <TabPanel value="recent"><MediaCard category={value}/></TabPanel>
  <TabPanel value="upcoming"><MediaCard category={value}/></TabPanel>
</TabContext>

</div>
    );


}

export default CarsTab;