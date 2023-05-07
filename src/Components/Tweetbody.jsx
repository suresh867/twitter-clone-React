const TweetBody = ({content, img}) => {
    return (
      <>
        <p className="tweet-text">{content}</p>
        <img
          src={img}
          alt="Tweet Image"
          height={300}
          width={400}
        />
      </>
    );
  };
  
  export default TweetBody;