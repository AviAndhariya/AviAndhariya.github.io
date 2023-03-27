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
import mongoose from "../utills/mongoose.png";
import mongo from "../utills/mongo.png";
import git from "../utills/github.png";
const Techstacks = () => {
  return (
    <Box id="Techstacks" mt={"5"}>
      <Heading fontSize={"5xl"} textDecor="underline" textAlign={"center"}>
        Tech-stack
      </Heading>
      <Box
        maxWidth={{ xl: "xl", lg: "xl", sm: "sm", base: "sm" }}
        justifyContent={"center"}
        margin={"auto"}
      >
        <Grid
          mt={"5"}
          templateColumns={{
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            base: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={htmllogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                HTML
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={csslogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                CSS
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={jslogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                JAVA-SCRIPT
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={reactlogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                REACT
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={reduxlogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                REDUX
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={chakralogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                CHAKRA
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={expresslogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                EXPRESS
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={npmlogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                NPM
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={tslogo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                TYPE-SCRIPT
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={mongoose}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                MONGOOSE
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={mongo}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                MONGO-DB
              </Text>{" "}
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign={"center"}>
              <Image
                maxWidth={{ xl: "150px", lg: "150px", sm: "100px", base: "100px" }}
                m={"auto"}
                src={git}
                alt="logo"
              />
              <Text fontWeight={"500"} fontSize={"xl"}>
                GITHUB
              </Text>{" "}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Techstacks;
