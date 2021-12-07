import React, { useEffect, useState,useContext } from 'react'
import './home.css'
import axios from "axios";
import MasonryImageList from '../components/Imagelist'
import MiniDrawer from '../components/SideDrawer';
import { Postcontext } from '../contextApi/PostContext';
import { getallposts } from '../Apicalls';
import { Container } from '@mui/material';
import LabelBottomNavigation from '../components/BottomNav';


 
function Timeline() {
    
    const [postdata,setpostdata]=useState([])

  const  getposts=async()=>{
      
    try{
        const response=await axios.get(`http://localhost:3000/api/post/timeline/all/619e9df303ddf270207ccbeb`)
        console.log(response.data)
        setpostdata(response.data)
    }
    catch(error){
        console.log(error)
    }

   }
  
   
   useEffect(()=>{
       getposts()
   },[])
    return (
        <div >
            
            <MiniDrawer/>
            {
                postdata!=null?
                <Container disableGutters={true} maxWidth={false} sx={{
                    background:'#252525' ,
                     paddingTop:{xs:'5rem',md:'8rem'},
                     paddingLeft:{xs:'0.5rem',sm:'5rem'},
                    
                     
                }}>
                        <MasonryImageList imagedata={postdata} />
                </Container>
           
           :null
            }
            <LabelBottomNavigation/>
            
             
            
        </div>
    )
}

export default Timeline
