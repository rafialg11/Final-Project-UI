import { Box, Image, Text } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Box borderRadius="md" boxShadow="md" bgColor={"whitesmoke"} mb={4}>
      <Image
        src="https://img.okezone.com/okz/500/content/2022/11/25/12/2714817/ingin-terlihat-seperti-baru-ini-7-cara-mencuci-sepatu-putih-dari-noda-kuning-10IvrOM7dW.jpg"
        alt=""
        coverSize="100%"
        sizes="md"
        style={{ borderRadius: "5px 5px 0 0" }}
      />

      <Box p="2">
        <Text fontSize="md" fontWeight="semibold" mb="1">
          Sepatu
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          Ventella
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          Rp. 200000
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
