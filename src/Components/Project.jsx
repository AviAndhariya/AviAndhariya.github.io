import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import webtaskkit from "../utills/Webtaskkit.png";
import Kimaye from "../utills/kimaye.png";
import sugar from "../utills/sugar.png";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  return (
    <Box mt={"10"} id="Project">
      <Heading fontSize={"5xl"} textAlign={"center"}>
        Project
      </Heading>
      <Box
        justifyContent={"center"}
        textAlign={"center"}
        maxWidth={{ "2xl": "5xl", xl: "5xl", lg: "xl", sm: "sm", base: "sm" }}
        margin={"auto"}
      >
        <Grid
          mt={"10"}
          templateRows={{
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            base: "repeat(2, 1fr)",
          }}
        >
          <GridItem>
            <Box mt={6} border={"solid #4299e1"} p={"2"} borderRadius={"10"}>
              <Image
                borderRadius={"10"}
                width={"100%"}
                src={webtaskkit}
                alt="logo"
              />
              <Box
                alignItems={"center"}
                borderRadius={"10"}
                p={"5"}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <Box
                    display={"flex"}
                    gap={"3"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Box>
                      <Heading>
                        <a href="https://webtaskit.vercel.app/">Webtask-kit</a>
                      </Heading>
                    </Box>
                    <Box>
                      <a href="https://github.com/SunilHooda/silky-cannon-605">
                        <BsGithub />
                      </a>
                    </Box>
                  </Box>
                  <Box margin={"10px 0px 0px 20px"} textAlign={"left"}>
                    <Text
                      fontSize={{
                        "2xl": "xl",
                        xl: "lg",
                        lg: "sm",
                        sm: "sm",
                        base: "xs",
                      }}
                    >
                      This is a collabrotive Project.This website is a fully
                      responsive clone of Airtable.com.<br></br> It provides
                      servise user for task management and Todos.<br></br>I have
                      made Sign-up & Login functionality. and in UI i have made
                      Pricing page, Payment page, Product page with fully
                      responsiveness.
                    </Text>
                    <Box mt={"2"}>
                      <Heading textAlign={"left"} fontSize={"25px"}>
                        Tech-stack :
                      </Heading>
                      <UnorderedList >
                        <ListItem>React</ListItem> <ListItem>Redux</ListItem>{" "}
                        <ListItem>Chakra</ListItem> <ListItem>Mock-server</ListItem>
                      </UnorderedList>
                    </Box>
                    <Box
                      mt={"2"}
                      display={"flex"}
                      justifyContent={"space-around"}
                    >
                      <Box>
                        <a href="https://github.com/SunilHooda/silky-cannon-605">
                          <button
                            style={{
                              width: "200px",
                              backgroundColor: "#4299e1",
                              color: "white",
                              border: "1px solid black",
                              borderRadius: "5px",
                            }}
                          >
                            Github
                          </button>
                        </a>
                      </Box>
                      <Box>
                        <a href="https://webtaskit.vercel.app/">
                          <button
                            style={{
                              width: "200px",
                              backgroundColor: "#4299e1",
                              color: "white",
                              border: "1px solid black",
                              borderRadius: "5px",
                            }}
                          >
                            Deploy Link
                          </button>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
          {/* <GridItem><Box><Image src={} alt='logo' /></Box></GridItem>
          <GridItem><Box><Image src={} alt='logo' /></Box></GridItem> */}
          <GridItem>
            <Box mt={6} border={"solid #4299e1"} p={"2"} borderRadius={"10"}>
              <Image
                borderRadius={"10"}
                width={"100%"}
                src={Kimaye}
                alt="logo"
              />
              <Box
                alignItems={"center"}
                borderRadius={"10"}
                p={"5"}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <Box
                    display={"flex"}
                    gap={"3"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Box>
                      <Heading>
                        <a href="https://whimsical-gingersnap-c9aa58.netlify.app/">Kimaye-Clone</a>
                      </Heading>
                    </Box>
                    <Box>
                      <a href="https://github.com/ashish123sharma/Kimaye-Project">
                        <BsGithub />
                      </a>
                    </Box>
                  </Box>
                  <Box margin={"10px 0px 0px 20px"} textAlign={"left"}>
                    <Text
                      fontSize={{
                        "2xl": "xl",
                        xl: "lg",
                        lg: "sm",
                        sm: "sm",
                        base: "xs",
                      }}
                    >
                      This is a collabrotive Project.This website is a 
                      clone of Kimaye.com.<br></br> It is fresh fruit selling website.
                      <br></br>I have made Prodct page & Cart with full functionality & UI.
                      
                    </Text>
                    <Box mt={"2"}>
                      <Heading textAlign={"left"} fontSize={"25px"}>
                        Tech-stack :
                      </Heading>
                      <UnorderedList >
                        <ListItem>javascript</ListItem> <ListItem>Bootstrap</ListItem>{" "}
                        <ListItem>CSS</ListItem> <ListItem>Req-res</ListItem>
                      </UnorderedList>
                    </Box>
                    <Box
                      mt={"2"}
                      display={"flex"}
                      justifyContent={"space-around"}
                    >
                      <Box>
                        <a href="https://github.com/ashish123sharma/Kimaye-Project">
                          <button
                            style={{
                              width: "200px",
                              backgroundColor: "#4299e1",
                              color: "white",
                              border: "1px solid black",
                              borderRadius: "5px",
                            }}
                          >
                            Github
                          </button>
                        </a>
                      </Box>
                      <Box>
                        <a href="https://whimsical-gingersnap-c9aa58.netlify.app/">
                          <button
                            style={{
                              width: "200px",
                              backgroundColor: "#4299e1",
                              color: "white",
                              border: "1px solid black",
                              borderRadius: "5px",
                            }}
                          >
                            Deploy Link
                          </button>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        {/* .......... */}
        <GridItem>
            <Box mt={6} border={"solid #4299e1"} p={"2"} borderRadius={"10"}>
              <Image
                borderRadius={"10"}
                width={"100%"}
                src={sugar}
                alt="logo"
              />
              <Box
                alignItems={"center"}
                borderRadius={"10"}
                p={"5"}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <Box
                    display={"flex"}
                    gap={"3"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Box>
                      <Heading>
                        <a href="https://reliable-haupia-18150c.netlify.app/products_makeup.html">Webtask-kit</a>
                      </Heading>
                    </Box>
                    <Box>
                      <a href="https://github.com/Aaru1996/Sugar_Cosmetics_clone">
                        <BsGithub />
                      </a>
                    </Box>
                  </Box>
                  <Box margin={"10px 0px 0px 20px"} textAlign={"left"}>
                    <Text
                      fontSize={{
                        "2xl": "xl",
                        xl: "lg",
                        lg: "sm",
                        sm: "sm",
                        base: "xs",
                      }}
                    >
                      This is a collabrotive Project.This website is a
                      clone of Sugar-cosmetics.com.<br></br> It is a E-commerce webiste
                      for cosmetic items.<br></br>I have
                      made Product page & cart in both Ui & functionality.
                      
                    </Text>
                    <Box mt={"2"}>
                      <Heading textAlign={"left"} fontSize={"25px"}>
                        Tech-stack :
                      </Heading>
                      <UnorderedList >
                        <ListItem>Java-script</ListItem> <ListItem>Github</ListItem>{" "}
                        <ListItem>Html</ListItem> <ListItem>Css</ListItem>
                      </UnorderedList>
                    </Box>
                    <Box
                      mt={"2"}
                      display={"flex"}
                      justifyContent={"space-around"}
                    >
                      <Box>
                        <a href="https://github.com/Aaru1996/Sugar_Cosmetics_clone">
                          <button
                            style={{
                              width: "200px",
                              backgroundColor: "#4299e1",
                              color: "white",
                              border: "1px solid black",
                              borderRadius: "5px",
                            }}
                          >
                            Github
                          </button>
                        </a>
                      </Box>
                      <Box>
                        <a href="https://reliable-haupia-18150c.netlify.app/products_makeup.html">
                          <button
                            style={{
                              width: "200px",
                              backgroundColor: "#4299e1",
                              color: "white",
                              border: "1px solid black",
                              borderRadius: "5px",
                            }}
                          >
                            Deploy Link
                          </button>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Project;
