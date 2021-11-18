import React, { useEffect, useState,useContext } from 'react'
import './home.css'
import MasonryImageList from '../components/Imagelist'
import MiniDrawer from '../components/SideDrawer';
import { Postcontext } from '../contextApi/PostContext';
import { getallposts } from '../Apicalls';
import { Container } from '@mui/material';


 
function Home() {
    const {posts,isFetching,error, dispatch}=useContext(Postcontext)
   
  const  getposts=async()=>{

    getallposts(dispatch)

   }
  console.log(posts)
   
   useEffect(()=>{
       getposts()
   },[])
    return (
        <div >
            
            <MiniDrawer/>
            {
                posts!=null?
                <Container disableGutters={true} maxWidth={false} sx={{
                    background:'#252525' ,
                     paddingTop:{xs:'5rem',md:'8rem'},
                     paddingLeft:{xs:'0.5rem',sm:'5rem'},
                    
                     
                }}>
                        <MasonryImageList imagedata={posts} />
                </Container>
           
           :null
            }
            
             
            
        </div>
    )
}

export default Home
