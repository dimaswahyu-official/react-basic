import list from "./PostList.module.css";
import Post from "./Post";
import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [post, setPost] = useState([]);

  function addPostHandler(e) {
    setPost((existingPost) => [e, ...existingPost]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onPosting={addPostHandler} />
        </Modal>
      )}
      {post.length > 0 && (
        <ul className={list.posts}>
          {post.map((e) => (
            <Post key={e.body} author={e.author} body={e.body} />
          ))}
          {/* <Post author="dimas" body="react is awesome" /> */}
        </ul>
      )}

      {post.length === 0 && (
        <div style={{textAlign:"center", color:"white"}}>
          <h1>There are no post yet</h1>
          <p>Start adding one!</p>
        </div>
        
      )}
    </>
  );
}
export default PostList;
