import { useState } from 'react';
import logo from './logo.svg';
import cat from './cat.png';
import {
  AspectRatio,
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  VStack
} from '@chakra-ui/react';

function App() {
  return (
    <Center>
      <Grid
        templateColumns='repeat(2,1fr)'
        templateAreas={[
          `"header header"
          "image image"
          "text text"
          "form form"`,
          null,
          `"header header"
          "text image"
          "form null"`
        ]}
        columnGap={4}
        rowGap={8}
        padding={8}
        width='100%'
        maxWidth='1224px' // arbitrary, usually the largest pixel-width that still looks decent.
      >
        <GridItem gridArea='header'>
          <VStack alignItems='center' gap={4}>
            <Heading
              color='facebook.500'
              fontSize='5xl'
              lineHeight='48px'
              width='fit-content'
            >
              UI/UX for Smarties
            </Heading>
            <Text fontWeight='600' fontSize='2xl'>
              Create beautiful applications that users love to look at.
            </Text>
          </VStack>
        </GridItem>
        <GridItem gridArea='text'>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste non
            adipisci, numquam modi debitis deserunt harum minus, labore
            dignissimos fugit odio ratione? Illum rem ipsum ratione sunt placeat
            odit accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Iste non adipisci, numquam modi debitis deserunt harum minus,
            labore dignissimos fugit odio ratione? Illum rem ipsum ratione sunt
            placeat odit accusamus.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste non
            adipisci, numquam modi debitis deserunt harum minus, labore
            dignissimos fugit odio ratione? Illum rem ipsum ratione sunt placeat
            odit accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Iste non adipisci, numquam modi debitis deserunt harum minus,
            labore dignissimos fugit odio ratione? Illum rem ipsum ratione sunt
            placeat odit accusamus.
          </Text>
        </GridItem>
        <GridItem gridArea='image'>
          <AspectRatio ratio={3 / 2} width="100%">
            <Image src={cat} />
          </AspectRatio>
        </GridItem>
        <GridItem gridArea='form' display="flex" flexDir="column" gap={4}>
          <FormControl m={0}>
            <FormLabel htmlFor="name-input">Name</FormLabel>
            <Input id="name-input"/>
          </FormControl>
          <FormControl m={0}>
            <FormLabel htmlFor="email-input">Email</FormLabel>
            <Input id="email-input"/>
          </FormControl>
          <Button colorScheme="facebook" width="fit-content">Contact me</Button>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default App;
