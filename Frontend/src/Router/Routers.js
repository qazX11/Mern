import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ThankYou from '../Pages/ThankYou'
import About from '../Pages/About'
import UserProfile from '../Pages/UserProfile'
import Contact from '../Pages/Contact'
import ReviewDetails from '../Pages/User/Reviews/ReviewDetails'
import EditReview from '../Pages/User/Reviews/EditReview'



// In your routes

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviewDetails" element={<ReviewDetails />} />
        <Route path="/user/reviews/edit/:reviewId" element={<EditReview />} />
        

    </Routes>
  );
};

export default Routers;







