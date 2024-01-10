import list from "./PostList.module.css";
import Post from "./Post";
import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosting , onStopPosting}) {
  const [stateData, setStateData] = useState("");
  const [stateAuthor, setStateAuthor] = useState("");

  function changeBodyHandler(event) {
    setStateData(event.target.value);
  }

  function changeAuthorHandler(event) {
    setStateAuthor(event.target.value);
  }

  return (
    <>
    {/* {stateModal ? <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal> : false} */}
      {isPosting && (<Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
          onCancel={onStopPosting}
        />
      </Modal>)}
      
      <ul className={list.posts}>
        <Post author="dimas" body="react is awesome" />
        <Post author="wahyu" body="learning by doing is more efficient" />
        <Post author={stateAuthor} body={stateData} />
      </ul>
    </>
  );
}
export default PostList;
