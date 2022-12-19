import React from "react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link } from "react-scroll";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import resume from "../utills/AviAndhariya_Resume.pdf"

const Links = ["Home", "About", "Techstacks", "Project", "Contact"];
const NavLink = ({ children }) => (
  <Link
    style={{ cursor: "pointer" }}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    activeClass="active"
    to={children}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    {children}
  </Link>
);

const handleclick= () =>{
  window.open("https://drive.google.com/u/0/uc?id=1yDCuCxyjlOzE52XbeftbCgfNxdnbOoTT&export=download")
}
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box
        bg={useColorModeValue("#4299e1", "gray.900")}
        px={4}
        color={"white"}
        w={"100%"}
        position={"fixed"}
        style={{ zIndex: "999" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color={useColorModeValue("black", "white")}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading size={"lg"}>
                <Link
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    bg: useColorModeValue("#4299e1", "gray.700"),
                  }}
                  activeClass="active"
                  to={"About"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Avi
                </Link>
              </Heading>
            </Box>
          </HStack>
          <HStack
            as={"nav"}
            spacing={12}
            display={{ base: "none", md: "flex" }}
            fontSize={"20px"}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon color={"black"} />
              ) : (
                <SunIcon />
              )}
            </Button>
            <Button
              bg={"white"}
              onClick={handleclick}
              color="black"
              _hover={{
                bg: "white",
              }}
            >
              <a
                href='https://drive.google.com/file/d/1yDCuCxyjlOzE52XbeftbCgfNxdnbOoTT/view?usp=share_link' 
                style={{ cursor: "pointer" }}
                target={"_blank"}
                rounded={"md"}
              >
                Resume
              </a>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"button"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.githubusercontent.com/u/101567331?v=4"}
                />
              </MenuButton>
              <MenuList color={useColorModeValue("black", "white")}>
                <MenuItem>
                  <a target="_blank" href="https://github.com/AviAndhariya">
                    Github
                  </a>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/avi-andhariya-177948191/"
                  >
                    Linkedin
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://medium.com/@avi.andhariya"
                  >
                    Medium
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;