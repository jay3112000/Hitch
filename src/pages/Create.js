import React, { useState,useContext } from 'react'
import MiniDrawer from '../components/SideDrawer'
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form'
import axios from "axios";
import { Chip, Container, Paper, Typography } from '@mui/material';
import './create.css'
import { createpost } from '../Apicalls';
import { CEPostcontext } from '../contextApi/CreateEditPostcontext';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Create() {
     const [title,settitle]=useState('')
     const [cname,setcname]=useState('')
     const [desc,setdesc]=useState('')
     const [img,setimg]=useState(null)
     const [preview,setpreview]=useState(null)
     const { post,error,uploading,uploaded,editing,edited,dispatch}=useContext(CEPostcontext)
     
    const createcall=()=>{
      createpost({title,cname,desc,img},dispatch)
    }

   const handleChangeImage = e => {
    setimg(e.target.files[0])
    setpreview(URL.createObjectURL(e.target.files[0]))
      
    }

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
        <img src= {preview==null?'https://cdn2.vectorstock.com/i/1000x1000/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg':preview} className='cover'/>
        </Paper>
      </Container>
      

      <Container
      disableGutters={true}
      >
      <div className="mt-3 px-0 contacts">

  <form  class="sign-in-form">
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Title" value={title} onChange={(e)=>{settitle(e.target.value)}}  />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="text" placeholder="Company Name(optional)"  value={cname} onChange={(e)=>{setcname(e.target.value)}}/>
              </div>
              <div class="text-field">
                <i class="fas fa-lock"></i>
                <textarea  placeholder="Description" rows='60' value={desc} onChange={(e)=>{setdesc(e.target.value)}}>

                </textarea>
              </div>
              <div class="">
                <i class="fas fa-lock"></i>
                <input type="file" accept='.png, .jpeg, .jpg'  onChange={(e)=>{handleChangeImage(e)}}/>
              </div>
              <button   class="btn"  type="button" onClick={createcall}>Submit</button>
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
      {
        
        uploaded==true ?
        <div style={{"position":"relative","width":"100%","zIndex":"10000"}}>
          <Alert severity="success"  variant="filled" >Posted Successfully</Alert>
          </div>
        :error!=null?
        <div style={{"position":"relative","width":"100%","zIndex":"10000"}}>
        <Alert severity="error" variant="filled">Something Went Wrong</Alert>
        </div>
        :null
      }
           </Container>
           {uploading?
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>:null
      }
     
        </div>
    )
}

export default Create
