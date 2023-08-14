import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";
import "./VideoDetails.css";

const VideoDetails = () => {
  return (
    <div className="VideoDetails">
      <Grid p="2" templateColumns="repeat(12, 1fr)" h="100vh" gap={2}>
        <GridItem colSpan={2} p={2} overflowY="auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </GridItem>
        <GridItem
          colSpan={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <iframe
            width={"100%"}
            height={"80%"}
            src="https://www.youtube.com/embed/X5EXTKMnDuA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </GridItem>
        <GridItem colSpan={3} bg="gray.400" p={2} overflowY="auto">
          <Grid templateRows="90% 10%" h="100%">
            <GridItem bg="purple" p={2} overflowY="auto">
              All Comments (Scrollable)
            </GridItem>
            <GridItem bg="yellow" p={2}>
              Input Comment (Sticky)
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default VideoDetails;
