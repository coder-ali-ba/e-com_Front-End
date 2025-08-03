// components/ImageSlider.js
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5gxryLLrnWT19ptA0tMdoJkaxShuYgC3Jg&s',
    caption: 'Slide 1: Product Showcase',
  },
  {
    url: 'https://media.istockphoto.com/id/1343544200/photo/shot-of-a-young-woman-shopping-for-groceries-in-a-supermarket.jpg?s=612x612&w=0&k=20&c=1drwwrXKJYPSYyMo96OtNXwt_jeYZsNxCNw8jIK8_p0=',
    caption: 'Slide 2: Our Shop',
  },
  {
    url: 'https://media.istockphoto.com/id/855670170/photo/cheerful-female-customer-shops-in-a-grocery-store.jpg?s=612x612&w=0&k=20&c=oVYVogTkP8a6pVFiQSPT7OUQY_1V0HqySo37Ps-ddwk=',
    caption: 'Slide 3: Online Store',
  },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{marginTop:"30px", textAlign:"center"}}>
     <Box sx={{
        height: '300px',
        backgroundImage: `url(${images[index].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display:"flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth:"800px",
        margin:"auto",
        borderRadius:"20px"
      }}>
      
      
        <ChevronLeftIcon sx={{fontSize:"60px", color:"white"}}  onClick={handlePrev}></ChevronLeftIcon>
        <ChevronRightIcon sx={{fontSize:"60px", color:"white"}} onClick={handleNext}></ChevronRightIcon>
      </Box>
      <Box margin={"auto"}  maxWidth={"800px"}>
      <Typography
        sx={{
            marginTop:"-100px",
            maxWidth:"800px",
            textAlign:"center",
            color:"white"
        }}
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consectetur mollitia voluptatibus tempore consequuntur ex, quo eum officia blanditiis quae, doloribus quas eligendi! Dolore, perspiciatis error eum iusto temporibus quis.</Typography>
      </Box>
    </div>
  );
};

export default ImageSlider