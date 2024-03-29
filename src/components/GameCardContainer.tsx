import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <>
      <Box
        w={"250px"}
        borderRadius={10}
        overflow={"hidden"}
        justifySelf={"center"}
      >
        {children}
      </Box>
    </>
  );
}
