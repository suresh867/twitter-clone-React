import Header from "./Header";
import TweetBody from "./Tweetbody";
import Footer from "./Footer";

const Tweet = ({ name, username, img, content, avatar}) => {
    return (
        <div className="tweet">
            <img
                src={avatar}
                alt="Profile Picture"
                height={50}
                width={50}
            />
            <div className="tweet-content">
                <Header name = {name} username={name}/>
                <TweetBody content={content} img = {img}/>
                <Footer />
            </div>
        </div>
    );
};

export default Tweet;