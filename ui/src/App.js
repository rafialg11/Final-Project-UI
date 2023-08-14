import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {  
  Routes,
  Route,  
} from "react-router-dom";
import Home from './pages/Home/Home';
import VideoDetails from './pages/Video Details/VideoDetails';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video' element={<VideoDetails/>} />                  
      </Routes>
    </ChakraProvider>
  );
}

export default App;
