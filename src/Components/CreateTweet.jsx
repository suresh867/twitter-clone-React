import { useState } from "react";
import axios from "axios";
import "./CreateTweet.css";
const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState(['']);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const handleSubmit = () => {
    upload()
  }

  const upload = async () => {
    await axios.post("https://react-workshop-todo.fly.dev/posts/", {

      content: tweetContent,
      image: "https://www.google.com/search?q=images&oq=images&aqs=chrome..69i57l2j69i59l2j0i271l2.1112j0j7&sourceid=chrome&ie=UTF-8#imgrc=JPTTQaGyXjUJMM",
    },
      {
        headers: { apiKey: "6457399f7213f63d43568b99" }
      }
    )
    setTweetContent("");
    setShouldRefresh((v) => !v)
  }


  return (
    <div className="tweet-create">
      <textarea
        id="tweet-text"
        placeholder="What's happening?"
        required
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      ></textarea>
      <div className="tweet-controls">
        <span id="char-count">280</span>
        <button id="tweet-btn" onClick={handleSubmit}>Tweet</button>
      </div>
    </div>
  );
};

export default CreateTweet;