import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#fff1e5">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main" p={4}>
        {/* Headlines Section */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>Headlines</Heading>
          <VStack spacing={4} align="start">
            <Box>
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text>Summary of the headline 1...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text>Summary of the headline 2...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Headline 3</Heading>
              <Text>Summary of the headline 3...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Featured Articles Section */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>Featured Articles</Heading>
          <VStack spacing={4} align="start">
            <Box>
              <Heading as="h3" size="md">Featured Article 1</Heading>
              <Text>Summary of the featured article 1...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Featured Article 2</Heading>
              <Text>Summary of the featured article 2...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Featured Article 3</Heading>
              <Text>Summary of the featured article 3...</Text>
            </Box>
          </VStack>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;