// src/components/Login.js
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text, ChakraProvider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {login} from '../assets/services/apis';
import { useState } from 'react';
import Cookies from 'js-cookie';
const Login = () => {

    // Añade el hook useNavigate
    const navigate = useNavigate();
    //añadir usestate para guardar el email y password como json
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        if (name === 'email') {
          setEmail(value);
        } else {
          setPassword(value);
        }
    }

    
    const handleLogin = () => {
        console.log(email, password);
        login(email, password).then((response) => {
            if (response.status === 200) {
              console.log("Exitooo");
              //set cookie
                Cookies.set('token', response.data.token);
                navigate('/');
            } else {
              alert(response.message);
            }
          });
      }

  return (
    <ChakraProvider>
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      m="auto"
      mt="10"
      boxShadow="lg"
    >
      <Heading as="h3" size="lg" textAlign="center" mb="6">
        Login
      </Heading>

      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input value={email} type="email" placeholder="Enter your email" name='email' onChange={onChange}/>
        </FormControl>

        <FormControl  isRequired>
          <FormLabel>Password</FormLabel>
          <Input value={password}type="password" placeholder="Enter your password" name='password' onChange={onChange}/>
        </FormControl>

        <Button colorScheme="blue" width="full" mt={4} onClick={handleLogin} >
          Login
        </Button>

        <Text fontSize="sm" mt={2}>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </Text>
      </VStack>
    </Box>
    </ChakraProvider>
  );
};

export default Login;