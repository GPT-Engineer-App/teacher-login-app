import { useState } from "react";
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Text, Box } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "teacher" && password === "password123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Teacher Login</Heading>
        {isLoggedIn ? (
          <Box textAlign="center">
            <Text fontSize="2xl">Welcome, {username}!</Text>
          </Box>
        ) : (
          <>
            <FormControl isInvalid={error}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Button leftIcon={<FaUser />} colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
