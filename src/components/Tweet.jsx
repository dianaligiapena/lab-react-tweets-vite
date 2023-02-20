function Tweet( {example} ) {
  return (
    <div className="tweet">
      <img
        src={example.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{example.user.name}</span>
            <span className="handle">@{example.user.handle}</span>
          </span>

          <span className="timestamp">{example.timestamp}</span>
        </div>

        <p className="message">{example.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
