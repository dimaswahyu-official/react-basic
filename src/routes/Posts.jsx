import { useState } from "react";
import MainHeader from "../components/MainHeader";
import NewPost from "./NewPost";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
    <Outlet/>
      <PostList />
    </>
  );
}

export default Posts;
