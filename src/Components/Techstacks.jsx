import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import reactlogo from "../utills/react.png";
import reduxlogo from "../utills/Redux.png";
import htmllogo from "../utills/html.png";
import csslogo from "../utills/css.png";
import jslogo from "../utills/javascript.png";
import chakralogo from "../utills/chakra..png";
import expresslogo from "../utills/express.png";
import npmlogo from "../utills/NPM.png";
import tslogo from "../utills/typescript..png";
import github from "../utills/github..png";
import postman from "../utills/POSTman.png";
import mongodb from "../utills/mongoDB.png";

const Techstacks = () => {
  return (
    <Box id="Techstacks" mt={'5'} justifyContent={'center'}>
		<Heading fontSize={'5xl'} textDecor="underline" textAlign={'center'}>Tech-stack</Heading>
      <Box  maxWidth={{xl:'xl',lg:'xl',sm:'sm',base:'sm'}} justifyContent={'center'}   margin={'auto'} >
        <Grid mt={'5'} templateColumns={{ xl:'repeat(4, 1fr)', '2xl':"repeat(4, 1fr)",lg:"repeat(4, 1fr)",sm:'repeat(2, 1fr)', base:'repeat(2, 1fr)' }} gap={6}>
          <GridItem><Box textAlign={'center'} ><Image src={htmllogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >HTML</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={csslogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >CSS</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={jslogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >JAVA-SCRIPT</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={reactlogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >REACT</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={reduxlogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >REDUX</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={chakralogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >CHAKRA</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={expresslogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >EXPRESS</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={npmlogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >NPM</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={tslogo} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >TYPE-SCRIPT</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={github} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >GITHUB</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={postman} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >POSTMAN</Text> </Box></GridItem>
          <GridItem><Box textAlign={'center'} ><Image src={mongodb} alt="logo" /><Text fontWeight={'500'} fontSize={'xl'} >MONGODB</Text> </Box></GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Techstacks;
