import { Grid, GridItem, Show } from "@chakra-ui/react"


function App() {
  
  const gridAreas = {
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }
  return <Grid templateAreas={gridAreas}>
    <GridItem 
      gridArea="nav"
      bg="gold"
    >Nav</GridItem>
    <GridItem
      gridArea="aside"
      bg="lightblue"
      hideBelow="lg"
    >Aside</GridItem>
    <GridItem
      gridArea="main"
      bg="lightgreen"
    >Main</GridItem>
  </Grid>
}

export default App
