import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [stateData, setStateData] = useState("");
  const [stateAuthor, setStateAuthor] = useState("");

  function changeBodyHandler(event) {
    setStateData(event.target.value);
  }

  function changeAuthorHandler(event) {
    setStateAuthor(event.target.value);
  }

  function onSubmitHandler(event){
    event.preventDefault();
    const postData ={
      body: stateData,
      author:stateAuthor
    }
    onCancel() 
    console.log(postData)
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
