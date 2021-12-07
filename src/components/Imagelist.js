import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './images.css'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

export default function MasonryImageList(props) {
  
  let admin=false
  if (window.location.pathname=='/profile'){
    admin=true
  }
  var w = window.innerWidth;
  var h = window.innerHeight;
  let col=0
  if (w>500 &&h>500){
     col=3
  }
  else{
     col=2
  }

  const like=async()=>{
    const userid=localStorage.getItem('userid')
      const body = {
          userId:userid, 
      };
      try {
        await axios.post(`http://localhost:3000/api/${props.item.userId}/like`, body);
      } catch (err) {
        console.log(err)
      }
  }


  return (
    <Box sx={{ width: "100%", height: "auto", overflowY: 'scroll',paddingX:{xs:'0rem',sm:'2rem'} }}>
      <ImageList variant="masonry" cols={col} gap={10}>
        {props.imagedata.map((item) => (
            
            
              <Link
              to={'/postpage/'+ item._id}
              >
            <ImageListItem key={item.id}  sx={{
              overflow:'hidden',
              borderRadius: 10 ,
              marginX:1
            }}>
              <Container
               disableGutters={true}
            sx={
              {
                maxHeight: {xs:'auto',sm:'auto'},
                maxWidth:{xs:'auto',md:'auto'},
               
              }
            }
              > 
              <img
                src={`http://localhost:3000/images/${item.img}`}
                srcSet={`http://localhost:3000/images/${item.img}`}
                alt={item.title}
                loading="lazy"
                className='cover'
              />
              </Container>
              <ImageListItemBar
            title={item.title}
            subtitle={item.desc}
            sx={{
              overflow: 'hidden',
              width: "auto",
              textAlign:'center',
              margin: "auto",
              display:{xs:'none',sm:'flex'}

            }}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)',marginRight:10 }}
                aria-label={`info about ${item.title}`}
              >
                {
                  admin==true?<Link to={'/edit/'+ item._id}><EditIcon/></Link>:<FavoriteBorderIcon onClick={()=>like()} />
                }
                
              </IconButton>
            }
          />
            </ImageListItem>
            </Link>
        ))}
      </ImageList>
    </Box>
  );
}

