import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card w="250px" borderRadius={10} overflow={"hidden"}>
      <Skeleton h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
