import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import "./VideoCard.css";

const VideoCard = ({
  urlImageThumbnail,
  videoTitle,
  videoOwner,
  videoViews,
}) => {
  const { urlImageThumbnail, videoTitle, videoOwner, videoViews } = props;
  return (
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
  );
};
export default VideoCard;
