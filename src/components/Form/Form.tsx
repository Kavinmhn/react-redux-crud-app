
import React, { useState, useEffect } from 'react';
// @ts-ignore
import { startAddPost } from "../../redux/posts/action.ts";
import { InputHandlerParam } from "../../types";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import Container from '@mui/material/Container';

export const Form = () => {
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

    dispatch(startAddPost(title, body));
    setTitle("");
    setBody("");
  };
  //===========================================================================================
  //PLESE READ THIS:
  //unable to install @mareial-ui/core with current react version to use MakeStyle from /styles.
  //So, I'm using inline CSS here.
  //There may be alternative option. But no time to find it out.
  //===========================================================================================
  return (
    <div style={{ display: "flex", justifyContent: "center", zIndex: "100000" }}>
      <Container style={{ backgroundColor: "#cccccc", position: "fixed", }}>
        <h1 style={{ textAlign: "center", padding: "15px", backgroundColor: "#ccc", margin: "2px" }}>CRUD App with React-Redux-TS</h1>
        <h4>Add New Post Here:</h4>
        <Input type="text" placeholder="Title" onChange={e => handleInput(e, "title")} style={{ width: "100%" }} />
        <Input type="text" placeholder="Body Text" onChange={e => handleInput(e, "body")} style={{ width: "100%" }} />
        <Button variant="contained" onClick={handleAdd} style={{ marginTop: "20px", marginBottom: "20px", width: "200px" }}>Add</Button>
      </Container>
    </div>
  )
}


export default Form;
