import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ productImg, title, storeName, price, productUrl }) => {
  return (
    <Box borderRadius="md" boxShadow="md" bgColor={"whitesmoke"} mb={4}>
      <Image
        src={productImg}
        alt=""
        coverSize="100%"
        sizes="md"
        style={{ borderRadius: "5px 5px 0 0" }}
      />

      <Link to={productUrl}>
        <Box p="2">
          <Text fontSize="md" fontWeight="semibold" mb="1">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.600" mb="2">
            {storeName}
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            Rp. {price}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
