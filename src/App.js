import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import style
import "./stylesheets/index.css";

//Import all components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import CreatePost from "./components/CreatePosts";
import EditPost from "./components/EditPost";
import PostsList from "./components/PostsList";
import Login from "./components/Login";
import About from "./components/About";
import HOC from "./components/HOC";

// const renderLoader = () => (
//     <div className="spinner-container">
//         <div className="spinner-border" role="status">
//             <span className="sr-only">Loading...</span>
//         </div>
//     </div>
// );

const App = () => (
    <div className="container">
        <Router>
            <Navbar />

                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/posts" element={<PostsList/>} />
                    <Route path="/posts/new/" element={<CreatePost/>} />
                    <Route path="/posts/:id" element={<HOC />} />
                    <Route path="/posts/:id/edit" element={<EditPost/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
      
            <Footer />
        </Router>
    </div>
);

export default App;
