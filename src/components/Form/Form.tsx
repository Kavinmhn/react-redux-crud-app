
import React, { useState, useEffect } from 'react';
// @ts-ignore
import { startAddPost, startUpdatePost } from "../../redux/posts/action.ts";
import { InputHandlerParam } from "../../types";
import { useDispatch } from "react-redux";
// @ts-ignore
import { post } from '../../redux/posts/types.ts'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import Container from '@mui/material/Container';

export const Form = ({ postToUpdate, update, setUpdateStatus }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()

  const handleInput = (e: InputHandlerParam, title: string) => {
    if (title === "title")
      setTitle(e.target.value);
    else
      setBody(e.target.value);
  };

  const handleAdd = () => {
    if (title !== "" && body !== "") {
      const { id, userId } = postToUpdate
      update ? dispatch(startUpdatePost(id, title, body, userId)) : dispatch(startAddPost(title, body));
      setTitle("");
      setBody("");
      setUpdateStatus(false)
    }
  };

  useEffect(() => {
    update ? setTitle(postToUpdate.title) : setTitle("");
    update ? setBody(postToUpdate.body) : setBody("");
  }, [update])
  //===========================================================================================
  //PLESE READ THIS:
  //unable to install @mareial-ui/core with current react version to use MakeStyle from /styles.
  //So, I'm using inline CSS here.
  //===========================================================================================
  return (
    <div style={{ display: "flex", justifyContent: "center", }}>
      <Container sx={{ backgroundColor: "#cccccc", position: "fixed", zIndex: 10000000000000 }}>
        {/*Please check the above comment regarding the inline CSS here*/}
        <h1 style={{ textAlign: "center", padding: "15px", backgroundColor: "#ccc", margin: "2px" }}>CRUD App with React-Redux-TS</h1>
        <h4>Add/Update Post Here:</h4>
        <Input required type="text" name="title" placeholder="Title" onChange={e => handleInput(e, "title")} sx={{ width: "100%" }} value={title} />
        <Input required type="text" name="body" placeholder="Body Text" onChange={e => handleInput(e, "body")} sx={{ width: "100%" }} value={body} />
        <Button variant="contained" onClick={handleAdd} style={{ marginTop: "20px", marginBottom: "20px", width: "200px" }}>{update ? "Update" : "Add"}</Button>
      </Container>
    </div>
  )
}

export default Form;
