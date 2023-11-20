import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg: `"nav nav" "aside main"`
      }}>
      <GridItem area="nav" bg="coral">NAV</GridItem>
      <Show above="lg">

        
        <GridItem area="aside" bg="gold">ASIDE</GridItem>
        <GridItem area="main" bg="dodgerblue">MAIN</GridItem>

      </Show>
    </Grid>
    </>
  );
}

export default App;
