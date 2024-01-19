import list from "./PostList.module.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchPost(){
      setLoading(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      setPost(resData.posts)
      setLoading(false)
    }
    fetchPost();
  },[]);

  function addPostHandler(e) {
    fetch('http://localhost:8080/posts' , {
      method:'POST',
      body:JSON.stringify(e),
      headers:{
        "Content-Type": "application/json"
      }
    })
    setPost((existingPost) => [e, ...existingPost]);
  }
  return (
    <>
      {!isLoading && isPosting && (
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

      {!isLoading && post.length === 0 && (
        <div style={{textAlign:"center", color:"white"}}>
          <h1>There are no post yet</h1>
          <p>Start adding one!</p>
        </div>
        
      )}

      {isLoading && <div style={{textAlign:"center", color:"white"}}><p>Loading the Data ...</p></div>}
    </>
  );
}
export default PostList;
