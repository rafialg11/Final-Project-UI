import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = () => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="base"
      mb={4}
      _hover={{ boxShadow: "lg" }}
      transition="box-shadow 0.3s"
    >
      <Flex align="center" mb={2}>
        <Avatar size="sm" name="rafi" mr={2} />
        <Text color="whitesmoke" fontWeight="semibold">
          Rafi
        </Text>
      </Flex>
      <Text fontSize="sm" color="gray.300" mb={1}>
        17/08/2023
      </Text>
      <Divider mb={2} />
      <Text color="whitesmoke">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nam ex
        perspiciatis, facilis tempora aliquam voluptate eius alias itaque
        quaerat. Praesentium laboriosam nulla corporis, nesciunt fuga cupiditate
        adipisci repellendus facere?
      </Text>
    </Box>
  );
};

export default Comment;
