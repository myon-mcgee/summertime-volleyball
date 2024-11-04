import Sidebar from './components/sidebar/Sidebar' 
import Homer from './components/home/Home'
import Contact from './components/contact/Contact'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Video from "./pages/Tape"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Video" element={<Video/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
