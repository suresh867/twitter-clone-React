// import { useEffect } from "react";
import "./App.css";
import Tweet from "./Components/Tweet";
import CreateTweet from "./Components/CreateTweet";
import Shell from './Components/Shell';
import axios from 'axios';

import { useEffect, useState } from "react";
const App = () => {
  
  const [posts, setPosts] = useState([]);


  useEffect(()=> {

    fetchTweets();

  }, [])
  const fetchTweets = async() => {
    const result = await axios.get("https://react-workshop-todo.fly.dev/posts/all",{
      headers:{
        apiKey:"6457399f7213f63d43568b99"
      }
    })
    setPosts(result.data);
    console.log(result.data)
    console.log(posts)
  }
  


  return (

    <>
    <Shell />
    <CreateTweet />
    {
      posts.map((tweet) => 
      <Tweet key = {tweet._id} name = {tweet.user.name} avatar = {`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`} img= {tweet.image} content = {tweet.content}/>
    
    )
    }

    
    </>
  );
};

export default App;