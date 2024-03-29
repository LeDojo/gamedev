import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score < 60 ? "yellow" : "";

  return (
    <Badge fontSize={"14px"} px={2} borderRadius={"4px"} colorScheme={color}>
      {score}
    </Badge>
  );
}
