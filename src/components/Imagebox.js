import React, { useContext, useEffect,useState } from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Chip, Container, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './images.css'
import MasonryImageList from './Imagelist';
import axios from "axios";

export default function BoxSx(props) {
    
  const [liked,setliked]=useState('False')

  const like=async()=>{
    const userid=localStorage.getItem('userid')
      const body = {
          userId:userid, 
      };
      try {
        const response=await axios.put(`http://localhost:3000/api/post/${props.data._id}/like`, body);
        console.log(response.data)
        
      } catch (err) {
        console.log(err)
      }
  }

  const is_liked=async()=>{
    const userid=await localStorage.getItem('userid')
      const body = {
          userId:userid, 
      };
      try {
        const response=await axios.put(`http://localhost:3000/api/post/${props.data._id}/liked`, body);
        console.log(response.data)
        setliked(response.data)
      } catch (err) {
        console.log(err)
      }
  }

  useEffect(()=>{
   is_liked()
},[props.data])

  return (
    <Box
      sx={{
        width: {sm:'auto',xs:'100%'},
        display:'flex',
        flexDirection:{xs:'column',sm:'row'},
        flexWrap:'true',
        overflow:'hidden',
        height: 'auto',
        borderRadius: 10,
        border:5,
        borderColor :'#5727A3',
        
        backgroundColor: '#252525',
        '&:hover': {
          backgroundColor: '#252525',
          
        },
      }}
    >
      
      <Container
      disableGutters={true}

      sx={{
         maxHeight: {xs:'auto',sm:700},
                maxWidth:{xs:'auto',md:700},
            overflow:'hidden',
            
      }}
      >
        <Paper
       elevation={5} 
       sx={{
        backgroundColor: '#5727A3',
      }}
      >
        <img src={`http://localhost:3000/images/${props.data.img}`} className='create-cover'/>
        </Paper>
      </Container>
      

      <Container
      sx={{
        display:'flex',
        flexWrap:'true',
        flexDirection:'column',
      }}
      >
        <Paper
        elevation={3} 
        sx={{
          backgroundColor: '#5727A3',
          marginY:2,
          maxWidth:'fit-content',
          paddingX:2

        }}
        >
        <Typography sx={{color:'white' , fontSize:{xs:20,sm:30}}}>
            {props.data.title}
        </Typography>
          </Paper>
        <Typography variant="body1" sx={{color:'white'}}>
            {props.data.desc}
        </Typography>
        <Box sx={{  display: 'flex',
          justifyContent: 'flex-start', }}>
        <Chip icon={<AddIcon style={{color: 'white'}}/>} label="Follow" sx={{
          backgroundColor: '#5727A3',
          color:'white',
          padding:1,
          marginX:2,
        }} />
         <Chip icon={<FavoriteBorderIcon style={ liked=='False'?{color: 'white'}:{color: 'red'}} onClick={()=>like()} />} label={liked=='False'? "Like":"Liked"} sx={{
          backgroundColor: '#5727A3',
          color:'white',
          padding:2,
          marginX:2,
        }} />
          </Box>
       
        
      </Container>
      
      </Box>

  );
}