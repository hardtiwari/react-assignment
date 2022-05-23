import React, { useState } from "react"
import  "./ViewAll.css"
import {Box ,Tab} from '@mui/material'
import {TabContext , TabList , TabPanel } from '@mui/lab'
import MediaCard from "./MediaCard"
import Footer from "./Footer"
function ViewAll() {
    const [value,setValue] =useState('0')
    const handleChange = (event : React.SyntheticEvent , newValue :string)=>{
        setValue(newValue)
    }
    return (
<div>        
<div className="viewCompo">
<TabContext value={value}>
  <Box className="box" sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="View All" value="viewAll" />
      <Tab label="Sedan" value="Sedan" />
      <Tab label="SUV" value="SUV" />
      <Tab label="hatchBack" value="hatchBack" />
      <Tab label="Coupe" value="coupe" />
    </TabList>
  </Box>
  <TabPanel value="viewAll"><MediaCard category={value}/></TabPanel>
  <TabPanel value="Sedan"><MediaCard category={value}/></TabPanel>
  <TabPanel value="SUV"><MediaCard category={value}/></TabPanel>
  <TabPanel value="hatchBack"><MediaCard category={value}/></TabPanel>
  <TabPanel value="coupe"><MediaCard category={value}/></TabPanel>
</TabContext>

      
      </div>
      <div className="footer">
      <Footer/>
      </div>
        </div>
    );
}

export default ViewAll;