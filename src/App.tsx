import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
// @ts-ignore
import { startGetPost, startUpdatePost } from "./redux/posts/action.ts";
import { PostActionsTypes, Post } from "./redux/posts/types";
import {
  AppProps,
  LinkDispatchProps,
  LinkStateProps
} from "./interfaces";
// @ts-ignore
import DashBoard from "./components/DashBoard/DashBoard.tsx";
// @ts-ignore
import Form from "./components/Form/Form.tsx"
import "./App.css";
import { Container } from "@mui/system";
// Combine All types of props

const App = () => {
  const [postToUpdate, setPostToUpdate] = useState([]);
  const [update, setUpdate] = useState(false)
{/*@ts-ignore*/}
  const posts = useSelector<ThunkDispatch<any, any, PostActionsTypes>>(state => state.post.posts)
  const dispatch = useDispatch()

  const handleGetAll = async () => {
    const getAllPost: any = await axios.get("https://jsonplaceholder.typicode.com/posts")
    dispatch(startGetPost(getAllPost.data))
  }

  const handleUpdate = (postId: number) => {
    {/*@ts-ignore*/ }
    const getPost = posts[0].filter(post => postId === post.id)
    const { id, title, body, userId } = getPost[0]

    {/*@ts-ignore*/ }
    setPostToUpdate({ id, title, body, userId });
    setUpdate(true)
    //dispatch(startUpdatePost(id, title, body, userId))
  }

  useEffect(() => {
    handleGetAll()
  }, [])

  const setUpdateStatus = (status: boolean) => {
    setUpdate(status)
  }

  //===========================================================================================
  //PLESE READ THIS:
  //unable to install @mareial-ui/core with current react version to use MakeStyle from /styles.
  //So, I'm using inline CSS here.
  //===========================================================================================
  return (
    <>

      <Form postToUpdate={postToUpdate} update={update} setUpdateStatus={setUpdateStatus} />

      {/*Please check the above comment regarding the inline CSS here*/}
      <Container sx={{ marginTop: "310px" }}>
        <DashBoard posts={posts} handleUpdate={id => handleUpdate(id)} />
      </Container>
    </>
  );

}

export default App;
