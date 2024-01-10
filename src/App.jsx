import { useState } from "react";
import MainHeader from "./components/MainHeader";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  const [showModalVisible, setModalVisible]=useState(false);

  function showModal(){
    setModalVisible(true)
  }

  function hideModal(){
    setModalVisible(false)
  }
  return (
    <>
      <MainHeader onCreatePost={showModal}/>
      <main>
        <PostList isPosting={showModalVisible} onStopPosting={hideModal}/>
      </main>
    </>
  );
}

export default App;
