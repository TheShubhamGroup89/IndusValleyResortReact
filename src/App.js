import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../src/components/screens/Header";
import Footer from './components/screens/Footer';
import Home from './components/screens/Home';
import ContactUs from './components/screens/Contact';
import Properties from './components/screens/Properties';
// import Gallery from './components/screens/Gallery';
// import AboutUs from './components/screens/AboutUs';
import Error from './components/screens/Error';
import NearbySites from './components/screens/NearBy';
import BookNowForm from './components/screens/BookNowForm';
import Ivr42 from './components/cottageInsider/Ivr42';
import Ivr69 from './components/cottageInsider/Ivr69';
// import Ivr10 from './components/cottageInsider/Ivr10';
// import Ivr46 from './components/cottageInsider/Ivr46';
import Ivr47 from './components/cottageInsider/Ivr47';
import Ivr43 from './components/cottageInsider/Ivr43';
import Accommodation from './components/screens/Accommodation';
import Restaurant from './components/screens/Restaurant';
import Gallery2 from './components/screens/Gallery2';
import AboutUs from './components/screens/AboutUs';
import IvrF1 from './components/cottageInsider/IvrF1';
import Ivr09 from './components/cottageInsider/Ivr09';

function App() {
  return (
    <BrowserRouter>
          <Header/>
       <Routes>
          <Route exact path='/' element={<Home/>} /> 
          {/* <Route exact path='/about' element={<AboutUs/>} />  */}
          <Route exact path='/hillcrest-cafe-in-mukteshwar' element={<Restaurant/>} />
          <Route exact path='/cottages-for-stay-in-mukteshwar' element={<Properties/>}/> 
          {/* <Route exact path='/gallery' element={<Gallery/>} />   */}
          <Route exact path='/gallery' element={<Gallery2/>} />  
          <Route exact path='/indus-valley-resort' element={<AboutUs/>}/>
          <Route exact path='/amenities' element={<Accommodation/>} />
          <Route exact path='/places-to-visit-in-mukteshwar' element={<NearbySites/>} /> 
          <Route exact path='/contact-indus-valley-resort' element={<ContactUs/>} /> 
          <Route exact path="*" element={<Error/>}/>
          <Route exact path='/booknow' element={<BookNowForm/>}/>
          <Route exact path='/1-bhk-cottage-stay-in-mukteshwar' element={<Ivr42/>}/>
          <Route exact path='/1-bhk-apartment-stay-in-mukteshwar' element={<Ivr69/>}/>
          <Route exact path='/1-bhk-apartment-homestay-near-nainital' element={<Ivr09/>}/>

          {/* <Route exact path='/ivr10' element={<Ivr10/>}/> */}
          {/* <Route exact path='/ivr46' element={<Ivr46/>}/> */}
          <Route exact path='/2-bhk-cottage-for-stay-in-mukteshwar-nainital' element={<Ivr47/>}/>
          <Route exact path='/4-bhk-cottage-for-stay-in-mukteshwar-nainital' element={<Ivr43/>}/>
          <Route exact path='/studio-apartment-for-stay-in-mukteshwar-nainital' element={<IvrF1/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  );
}
export default App;
