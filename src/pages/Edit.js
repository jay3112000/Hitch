import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import MiniDrawer from '../components/SideDrawer'
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form'
import axios from "axios";
import { Chip, Container, Paper, Typography } from '@mui/material';
import './create.css'

function Edit() {
     const [title,settitle]=useState('')
     const [cname,setcname]=useState('')
     const [desc,setdesc]=useState('')
     const [img,setimg]=useState(null)
     const [postdata,setpostdata]=useState([])
     const  id  = useParams().id;
     
     const getpost=async()=>{
         try{
             const response=await axios.get(`http://localhost:3000/api/post/${id}`)
             console.log(response.data)
             setpostdata(response.data)
             settitle(response.data.title)
             setcname(response.data.cname)
             setdesc(response.data.desc)
             
         }
         catch(error){
             console.log(error)
         }
     }

     
     const Editpost=async(e)=>{
        
      e.preventDefault();


            const body = {
                userId:'619e9df303ddf270207ccbeb',
                title: title,
                desc: desc,
                cname:cname,
                
                
            };
           
            try{
            const response=await axios.put(`http://localhost:3000/api/post/${id}`,body)
            console.log(response.data)
            
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getpost()
        
   },[])
    return (
        <div>
           <MiniDrawer/>
           <Container disableGutters={true} maxWidth={false} sx={{
                    background:'#252525' ,
                     paddingTop:{xs:'5rem',md:'8rem'},
                     paddingLeft:{xs:'0.5rem',sm:'5rem'},
                    height:1000,          
                }}>
            
     <Box
      sx={{
        width: {sm:800,xs:'100%'},
        display:'flex',
        flexDirection:{xs:'column',sm:'row'},
        flexWrap:'true',
        overflow:'hidden',
        height: 'auto',
        borderRadius: 10,
        border:5,
        borderColor :'#5727A3',
        marginX:'auto',
        backgroundColor: '#252525',
        '&:hover': {
          backgroundColor: '#252525',
          
        },
      }}
    >
      
      <Container
      disableGutters={true}
      sx={{
         maxHeight: {xs:'auto',sm:'auto'},
                maxWidth:{xs:'auto',md:'auto'},
            overflow:'hidden',
      }}
      >
        <Paper
       elevation={5} 
       sx={{
        backgroundColor: '#5727A3',
      }}
      >
        <img src={`http://localhost:3000/images/${postdata.img}`} className='cover'/>
        </Paper>
      </Container>
      

      <Container
      disableGutters={true}
      >
      <div className="mt-3 px-0 contacts">

  <form  class="sign-in-form">
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder={title}  onChange={(e)=>{settitle(e.target.value)}}  />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="text" placeholder={cname}   onChange={(e)=>{setcname(e.target.value)}}/>
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <textarea  placeholder={desc} rows='60'  onChange={(e)=>{setdesc(e.target.value)}}>

                </textarea>
              </div>
              
              <button   class="btn"  type="button" onClick={Editpost}>Update</button>
              {/* <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </form>
  
</div>
        
      </Container>
      </Box> 
           </Container>
        </div>
    )
}

export default Edit
