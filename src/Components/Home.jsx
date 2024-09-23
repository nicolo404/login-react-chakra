{/**/}
// src/components/Home.js
import React from 'react';
import { Box, Button, Heading, Text, VStack, Stack, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const Home = () => {
  const navigate = useNavigate();

    React.useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
          navigate('/login');
        }
      });    

  const handleLogout = () => {
    Cookies.remove('token');
    console.log('Logged out');
    navigate('/login');
  };

  return (
    <Box p={8} maxW="1200px" m="auto" mt="10">
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to the Home Page!
        </Heading>
        <Text fontSize="xl" color="gray.500">
          You are now logged in.
        </Text>

        {/* Botones o enlaces a otras secciones */}
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={() => alert('This is a sample action')}>
            Action 1
          </Button>
          <Button colorScheme="teal" onClick={() => alert('This is another action')}>
            Action 2
          </Button>
        </HStack>

        <Stack mt={6}>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Home;
