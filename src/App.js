import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Video from "./pages/videoPage/Tape"
import Home from "./pages/homePage/Home"
import ContactPage from "./pages/contactPage/Contact"
import NoPage from "./pages/ErrorPage/NoPage"
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Video" element={<Video/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
