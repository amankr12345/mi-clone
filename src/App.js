import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { Route, Routes} from 'react-router-dom'
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories'
import Productreview from './components/ProductReview';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <PreNavbar/>
        <Navbar/>
       <Slider start={data.banner.start} />
       <Offers offers={data.offer}/>
       <Heading text='STAR PRODUCTS'/>
       <StarProduct star={data.starProduct}/>
       <Heading text='HOT ACCESSORIES'/>
       <HotAccessoriesMenu />
       <Routes>
       <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
       <Route exact path='/smartDevices' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
       <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
       <Route exact path='/lifeStyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
       <Route exact path='/mobileaccessories' element={<HotAccessories mobileaccessories={data.hotAccessories.mobileAccessories} mobileaccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
    </Routes>
    <Heading text='PRODUCT REVIEWS'/>
    <Productreview star={data.productReviews}/>
    <Heading text='VIDEOS'/>
    <Videos star={data.videos}/>
    <Heading text='IN THE PRESS'/>
    <Banner star={data.banner.end}/>
    <Footer star={data.footer}/>
    </>
  );
}

export default App;
