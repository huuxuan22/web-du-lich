import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
// import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./page/Contact";
import TravelServices from "./component/TravelService";
import PopularTours from "./component/PopularTour";
import UuDai from "./component/UuDai";
import FavoriteDestinations from "./component/FavoriteDestinations";
import 'aos/dist/aos.css';
import TestimonialSection from "./component/TestimonialSection";
import FoodGridMUI from "./component/FoodGrid";
import HotelGridMUI from "./component/HotelGridMUI";
import HomePage from "./page/HomePage";
import TravelIntroduce from "./page/TravelIntroduce";
import BlogDetail from "./component/BlogDetail";
import ServiceGridMUI from "./page/ServiceGridMUI";
import FeedbackPage from "./component/FeedbackPage";
import TravelDestination from "./component/TravelDestination";
import PlaceDetail from "./page/PlaceDetail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/place" element={<PlaceDetail />} />
          <Route path="/destination" element={<TravelDestination />} />
          <Route path="/udai" element={<UuDai />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/introduce" element={<TravelIntroduce />} />
          <Route path="/hotel" element={<HotelGridMUI />} />
          <Route path="/diem-den" element={<FavoriteDestinations />} />
          <Route path="/spinner" element={<TestimonialSection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/food" element={<FoodGridMUI />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/travel" element={<TravelServices />} />
          <Route path="/popular" element={<PopularTours />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServiceGridMUI />} />
          <></>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
