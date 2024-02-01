import list from "./PostList.module.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const post = useLoaderData();

  return (
    <>
      {post.length > 0 && (
        <ul className={list.posts}>
          {post.map((e) => (
            <Post key={e.body} author={e.author} body={e.body} />
          ))}
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
