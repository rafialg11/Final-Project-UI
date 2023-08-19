import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Box,
  Textarea,
  Button,
  IconButton,
  Input,
} from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Comment from "../../components/Comment";
import "./VideoDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { videoId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Panggil API dan simpan datanya ke dalam state "videos"
    axios
      .get(
        `https://tpplaybackend-production.up.railway.app/api/videos/${videoId}`
      )
      .then((response) => {
        const videoUrl = response.data.videoUrl;
        setVideoUrl(videoUrl);
        axios
          .get(
            `https://tpplaybackend-production.up.railway.app/api/products/${videoId}`
          )
          .then((productResponse) => {
            setProducts(productResponse.data);
          })
          .catch((productError) => {
            console.error("Error fetching product data:", productError);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [videoId]);

  return (
    <div className="VideoDetails">
      <Grid p="2" templateColumns="repeat(12, 1fr)" h="100vh" gap={2}>
        <GridItem colSpan={2} p={4} overflowY="auto">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              title={product.title}
              storeName={product.storeName}
              price={product.price}
              productImg={product.productImg}
              productUrl={product.productUrl}
            />
          ))}
        </GridItem>
        <GridItem colSpan={7} justifyContent="center" alignItems="center">
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Box mb={10} mt={5} ml={2}>
              <IconButton
                icon={<ArrowBackIcon />}
                aria-label="Kembali"
                colorScheme="white"
              />
            </Box>
          </Link>
          <iframe
            width={"100%"}
            height={"80%"}
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </GridItem>
        <GridItem colSpan={3} p={2} overflowY="auto">
          <Grid templateRows="70% 30%" h="100%">
            <GridItem p={2} overflowY="auto">
              <Comment />
              <Comment />
            </GridItem>
            <GridItem p={2}>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Input
                  placeholder="Masukkan username Anda..."
                  size="md"
                  mb={2}
                  color="whitesmoke"
                />
                <Textarea
                  placeholder="Tulis komentar Anda di sini..."
                  size="md"
                  resize="vertical"
                  mb={2}
                  color="whitesmoke"
                />
                <Button color="whitesmoke" bgColor="#3CCF4E">
                  Kirim Komentar
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default VideoDetails;
