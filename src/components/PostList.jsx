import list from "./PostList.module.css";
import Post from "./Post";
import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosting , onStopPosting}) {


  return (
    <>
      {isPosting && (<Modal onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
        />
      </Modal>)}
      
      <ul className={list.posts}>
        <Post author="dimas" body="react is awesome" />
      </ul>
    </>
  );
}
export default PostList;
