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

const VideoCard = () => {
  //   const { name, description, price, image } = product;
  return (
    <Card
      height={350}
      backgroundImage="https://i.pinimg.com/236x/54/d2/dd/54d2dd16d05f53e376be05992742c7a4.jpg"
      backgroundSize="cover"
    >
      <CardHeader>
        <Heading size="sm">
          <div>
            <div></div>
            <div className="viewCount">
              <AiOutlineEye />
              <span>122</span>
            </div>
          </div>
        </Heading>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter bgGradient="linear(to-t, rgba(30, 30, 30, 0.9), rgba(204, 204, 204, 0))">
        <VStack spacing={1} align="stretch">
          <div className="product-name">
            <h1>Sepatu Murah Meriah edisi HUT Indo ke 45</h1>
          </div>
          <div className="store-name">
            <h1>Ventella</h1>
          </div>
        </VStack>
      </CardFooter>
    </Card>
  );
};
export default VideoCard;
