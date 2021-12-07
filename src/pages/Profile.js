import React, { useEffect, useState,useContext } from 'react'
import './home.css'
import axios from "axios";
import MasonryImageList from '../components/Imagelist'
import MiniDrawer from '../components/SideDrawer';
import { Postcontext } from '../contextApi/PostContext';
import { getallposts } from '../Apicalls';
import { Container } from '@mui/material';
import LabelBottomNavigation from '../components/BottomNav';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    wall:{
        background:'#252525',
        height: 700 ,
    },
  });

function Profile() {
    
    const [postdata,setpostdata]=useState([])
    const classes = useStyles();
  const  getposts=async()=>{
      const id=localStorage.getItem('userid')
    try{
        const response=await axios.get(`http://localhost:3000/api/post/myposts/all/${id}`)
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
        <div  className={classes.wall}>
            
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

export default Profile
