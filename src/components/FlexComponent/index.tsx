import { Box, Component } from "./styles";

export function FlexComponent(){
  return(
    <Component> 
      <Box color="red" order="0"></Box>
      <Box color="green" order="2"></Box>
      <Box color="blue" order="1"></Box>
    </Component>
  )
}