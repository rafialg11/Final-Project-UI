import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = ({ username, comment, timestamp }) => {
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
          {username}
        </Text>
      </Flex>
      <Text fontSize="sm" color="gray.300" mb={1}>
        {timestamp}
      </Text>
      <Divider mb={2} />
      <Text color="whitesmoke">{comment}</Text>
    </Box>
  );
};

export default Comment;
