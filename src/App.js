import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {  
  Routes,
  Route,  
} from "react-router-dom";
import Home from './pages/Home/Home';
import VideoDetails from './pages/Video Details/VideoDetails';
import './App.css';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    dark: {
      100: "#1a202c",
    },
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:videoId' element={<VideoDetails/>} />                  
      </Routes>
    </ChakraProvider>
  );
}

export default App;
