import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet( {example} ) {
  return (
    <div className="tweet">
      <ProfileImage src={example.user.image}/>

      <div className="body">
        <div className="top">
          <User 
              name = {example.user.name} 
              handle = {example.user.handle}
              />

          <Timestamp timestamp = {example.timestamp} />
        </div>

          <Message message = {example.message} />

      <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
