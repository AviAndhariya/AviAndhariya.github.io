import { Box, Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import Calendar from './Calender'
import Gihubcal from './Calender'
import Contact from './Contact'
import Project from './Project'
import Techstacks from './Techstacks'


export const About = () => {
  return (<div id="About" >
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
<Flex p={8} flex={1} align={'center'} justify={'center'}>
<Stack spacing={6} w={'full'} maxW={'590px'}>
  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
    <Text
      as={'span'}
      position={'relative'}
      _after={{
        content: "''",
        width: 'full',
        height: useBreakpointValue({ base: '20%', md: '30%' }),
        position: 'absolute',
        bottom: 1,
        left: 0,
        zIndex: -1,
      }}>
      I am Avi Andharia
    </Text>
    <br />{' '}
    <Text color={'blue.400'} as={'span'}>
      Full-Stack Web-Developer
    </Text>{' '}
  </Heading>
  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
    My Name is Avi Andhariya and I am M-E-R-N Full-Stack Web-Developer with 1200+Hrs of coding experience.I enjoy every step of a design process,from discussion and collabortion.
  </Text>
  {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
    <Button
      rounded={'full'}
      bg={'blue.400'}
      color={'white'}
      _hover={{
        bg: 'blue.500',
      }}>
      Create Project
    </Button>
    <Button rounded={'full'}>How It Works</Button>
  </Stack> */}
 
</Stack>
</Flex>
<Flex flex={1}>
        <Image
        width={"450px"}
        marginTop={"100px"}
        border={"2px solid black"}
        borderRadius={"20px"}
        height={"450px"}
          alt={'Login Image'}
          objectFit={'cover'}
          src={"https://avatars.githubusercontent.com/u/101567331?v=4"}
        />
      </Flex>
      </Stack>
    <Project />
    <Calendar />
    <Techstacks />
    <Contact />
    </div>
  )
}

