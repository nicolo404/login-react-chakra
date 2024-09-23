// src/components/SignUp.js
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text } from '@chakra-ui/react';

const SignUp = () => {
  return (
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
        Sign Up
      </Heading>

      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" placeholder="Confirm your password" />
        </FormControl>

        <Button colorScheme="teal" width="full" mt={4}>
          Sign Up
        </Button>

        <Text fontSize="sm" mt={2}>
          Already have an account? <a href="/login">Login</a>
        </Text>
      </VStack>
    </Box>
  );
};

export default SignUp;