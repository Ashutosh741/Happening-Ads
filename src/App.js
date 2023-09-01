
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Home from './Routes/Home';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Fashion from './Routes/Fashion';
import Fashion2 from './Routes/Fashion2';
import Blog from './Routes/Blog';
import Pharmacy from './Routes/Pharmacy';
import Store from './Routes/Store';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/fashion" element={<Fashion/>} />
      <Route path="/fashion2" element={<Fashion2/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/pharmacy" element={<Pharmacy/>} />
      <Route path="/store" element={<Store/>} />





      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
