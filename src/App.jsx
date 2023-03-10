import "./App.css";
import { fetchMe } from "./api/Auth";
import { getAllPosts } from "./api/Posts";
import Header from "./components/Header";
import AllPosts from "./Components/Posts";
import Register from "./Components/Register";
import  Login from "./Components/Login";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  //website posts
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data.posts)
    }
    fetchPosts()
  }, []);

  //log in 
  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  //buttons
  useEffect(() => {
    const setInitialData = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    };
    setInitialData();
  }, []);

  return (
    <div>
      <>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<AllPosts posts={posts} setPosts={setPosts}/>} />
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/register" element={<Register setToken={setToken}/>} />
          </Routes>
          
        </div>
      </>
    </div>
  );
}

export default App;
