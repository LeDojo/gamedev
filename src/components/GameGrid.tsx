import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid column={3} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};
