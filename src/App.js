import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from "react";
import Video from "./pages/videoPage/Tape"
import Home from "./pages/homePage/Home"
import ContactPage from "./pages/contactPage/Contact"
import NoPage from "./pages/ErrorPage/NoPage"
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter basename="/summertime-volleyball">
        <Routes>
        <Route path="/" element={windowWidth <= 450 ? <Video /> : <Home />} />
          <Route path="/Video" element={<Video/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
