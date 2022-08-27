import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { startGetPost } from "./redux/posts/action.ts";
import { PostActionsTypes, Post } from "./redux/posts/types";
import {
  AppProps,
  LinkDispatchProps,
  LinkStateProps
} from "./interfaces";
import DashBoard from "./components/DashBoard/DashBoard.tsx";
import Form from "./components/Form/Form.tsx"
import "./App.css";
// Combine All types of props
type Props = AppProps & LinkDispatchProps & LinkStateProps;

const App = () => {
  

  const posts = useSelector<ThunkDispatch<any, any, PostActionsTypes>>(state => state.post.posts)
  const dispatch = useDispatch()

  const handleGetAll = async () => {
    const getAllPost: any = await axios.get("https://jsonplaceholder.typicode.com/posts")
    dispatch(startGetPost(getAllPost.data))
  }
  
  useEffect(()=>{
    handleGetAll()
  },[])
  //===========================================================================================
  //PLESE READ THIS:
  //unable to install @mareial-ui/core with current react version to use MakeStyle from /styles.
  //So, I'm using inline CSS here.
  //There may be alternative option. But no time to find it out.
  //===========================================================================================
    return (
      <>
      <Form />
        <div style={{marginTop: "310px"}}>
        <DashBoard posts={posts} />
        </div>
        </>
    );
  
}

export default App;
