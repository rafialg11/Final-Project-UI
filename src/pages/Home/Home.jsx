import React, { useState, useEffect } from "react";
import VideoCard from "../../components/VideoCard";
import axios from "axios";

import {
  SimpleGrid,
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Box,
  Flex,
  Spacer,
  Input,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "./Home.css";
import logo from "../../../src/assets/images/tokplay.png";
const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Panggil API dan simpan datanya ke dalam state "videos"
    axios
      .get("https://tpplaybackend-production.up.railway.app/api/videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Home">
      <Grid templateRows="1fr" p={2}>
        {/* Navigasi (nav) */}
        <GridItem
          pl={2}
          pr={2}
          position="sticky"
          top="0"
          bg="#1A202C"
          zIndex="sticky"
        >
          <Flex p={2} align="center">
            {/* Logo */}
            <Box>
              <img className="logo" src={logo} alt="Logo" />
            </Box>

            {/* Spacer untuk memberikan jarak antara logo dan tombol pencarian */}
            <Spacer />

            {/* Tombol Pencarian */}
            <Box>
              <InputGroup borderRadius={30} size="md" width={500}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="gray.600" />}
                />
                <Input
                  type="text"
                  placeholder="Cari video yang mau ditonton"
                  color="whitesmoke"
                  border="1px solid #3CCF4E"
                />
                <InputRightAddon p={0} border="none">
                  <Button
                    size="md"
                    borderLeftRadius={0}
                    borderRightRadius={3.3}
                    border="1px solid #3CCF4E"
                    bgColor="#3CCF4E"
                  >
                    Cari
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </Box>
          </Flex>
        </GridItem>

        {/* Konten Utama (main) */}
        <GridItem p={4}>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
          >
            <VideoCard
              key={video.id}
              urlImageThumbnail={video.thumbnailUrl}
              videoTitle={video.title}
              videoOwner={video.owner}
              videoViews={video.views}
            />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </div>
  );
};
export default Home;
