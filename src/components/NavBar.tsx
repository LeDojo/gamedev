import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-analytics-icon.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
