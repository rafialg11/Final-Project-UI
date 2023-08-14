import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import Home from './pages/Home/Home';
import VideoDetails from './pages/Video Details/VideoDetails';

function App() {
  return (
    <ChakraProvider>
      {/* <Home /> */}
      <VideoDetails />
    </ChakraProvider>
  );
}

export default App;
