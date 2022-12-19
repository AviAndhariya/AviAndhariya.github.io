import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { BsGithub, BsLinkedin, BsPerson, BsMedium } from "react-icons/bs";
  import { MdEmail, MdOutlineEmail } from "react-icons/md";
  import emailjs from "emailjs-com";
  const confetti = {
    light: {
      primary: "4299E1", // blue.400
      secondary: "BEE3F8", // blue.100
    },
  
    dark: {
      primary: "1A365D", // blue.900
      secondary: "2A4365", // blue.800
    },
  };
  const CONFETTI_LIGHT = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fcontact&psig=AOvVaw0kGnHDsklEJxfYzTeBft2b&ust=1671527859694000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMj6utOshfwCFQAAAAAdAAAAABAE'

  const CONFETTI_DARK = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fcontact&psig=AOvVaw0kGnHDsklEJxfYzTeBft2b&ust=1671527859694000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMj6utOshfwCFQAAAAAdAAAAABAE'

  
  const Contact = () => {
    const { hasCopied, onCopy } = useClipboard("avi.andhariya@gmail.com");
    const toast = useToast();
  
    const handleEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_n7am7qv",
          "template_hgsb73m",
          e.target,
          "ltv7Yq8WnfqYb7SGg"
        )
        .then(
          (result) => {
            //   console.log(result.text);
            toast({
              title: "Account created.",
              description: "Avi Andhariya will contact you soon. Thank You",
              status: "success",
              duration: 2000,
              position: "top",
              isClosable: true,
            });
          },
          (error) => {
            //   console.log(error.text);
            toast({
              title: "Errer",
              description: "please fill all details. Thank You",
              status: "error",
              position: "top",
              duration: 2000,
              isClosable: true,
            });
          }
        );
      e.target.reset();
    };
  
    return (
      <div>
        <Flex
          bg={useColorModeValue("gray.100", "gray.900")}
          align="center"
          justify="center"
          css={{
            backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
            backgroundAttachment: "fixed",
          }}
          id="Contact"
        >
          <Box
            borderRadius="lg"
            width={"50%"}
            m={{ base: 5, md: 16, lg: 10 }}
            p={{ base: 5, lg: 16 }}
          >
            <Box>
              <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                <Heading
                  textAlign={"center"}
                  textDecor="underline"
                  textTransform="uppercase"
                  fontSize={{ base: "3xl", sm: "4xl ", lg: "5xl" }}
                  fontWeight={600}
                >
                  Contact Me
                </Heading>
  
                <Stack
                  spacing={{ base: 4, md: 8, lg: 15 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Stack
                    align="center"
                    justify="space-around"
                    direction={{ base: "row", md: "column" }}
                  >
                    <Tooltip
                      label={hasCopied ? "Email Copied!" : "Copy Email"}
                      closeOnClick={false}
                      hasArrow
                    >
                      <IconButton
                        aria-label="email"
                        variant="ghost"
                        size="lg"
                        fontSize="3xl"
                        icon={<MdEmail />}
                        _hover={{
                          bg: useColorModeValue("#89323f", "#3182CE"),
                          color: useColorModeValue("white", "black"),
                        }}
                        onClick={onCopy}
                        isRound
                      />
                    </Tooltip>
  
                    <Link
                      href="https://github.com/AviAndhariya"
                      target={"_blank"}
                    >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        fontSize="3xl"
                        icon={<BsGithub />}
                        _hover={{
                          bg: useColorModeValue("#89323f", "#3182CE"),
                          color: useColorModeValue("white", "black"),
                        }}
                        isRound
                      />
                    </Link>
  
                    <Link
                      href="https://medium.com/@avi.andhariya"
                      target={"_blank"}
                    >
                      <IconButton
                        aria-label="medium"
                        variant="ghost"
                        size="lg"
                        icon={<BsMedium size="28px" />}
                        _hover={{
                          bg: useColorModeValue("#89323f", "#3182CE"),
                          color: useColorModeValue("white", "black"),
                        }}
                        isRound
                      />
                    </Link>
  
                    <Link
                      href="https://www.linkedin.com/in/avi-andhariya-177948191/"
                      target={"_blank"}
                    >
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        icon={<BsLinkedin size="28px" />}
                        _hover={{
                          bg: useColorModeValue("#89323f", "#3182CE"),
                          color: useColorModeValue("white", "black"),
                        }}
                        isRound
                      />
                    </Link>
                  </Stack>
  
                  <Box
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius="lg"
                    p={4}
                    width={{ lg: "500px", base: "" }}
                    color={useColorModeValue("gray.700", "whiteAlpha.900")}
                    shadow="base"
                  >
                    <form
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                      onSubmit={handleEmail}
                    >
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
  
                        <InputGroup>
                          <InputLeftElement children={<BsPerson />} />
                          <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </InputGroup>
                      </FormControl>
  
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
  
                        <InputGroup>
                          <InputLeftElement children={<MdOutlineEmail />} />
                          <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>
  
                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
  
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          // resize="none"
                        />
                      </FormControl>
  
                      <Button
                        display={"block"}
                        colorScheme="blue"
                        bg="blue.400"
                        type="submit"
                        color="white"
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </Box>
                </Stack>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </div>
    );
  };
  
  export default Contact;