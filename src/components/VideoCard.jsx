import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import "./VideoCard.css";

const VideoCard = ({
  videoId,
  urlImageThumbnail,
  videoTitle,
  videoOwner,
  videoViews,
}) => {
  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: "none" }}>
      <Card
        height={350}
        backgroundImage={urlImageThumbnail}
        backgroundSize="cover"
      >
        <CardHeader>
          <Heading size="sm">
            <div>
              <div></div>
              <div className="viewCount">
                <AiOutlineEye />
                <span>{videoViews}</span>
              </div>
            </div>
          </Heading>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter bgGradient="linear(to-t, rgba(30, 30, 30, 0.9), rgba(204, 204, 204, 0))">
          <VStack spacing={1} align="stretch">
            <div className="product-name">
              <h1>{videoTitle}</h1>
            </div>
            <div className="store-name">
              <h1>{videoOwner}</h1>
            </div>
          </VStack>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default VideoCard;
