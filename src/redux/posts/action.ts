// @ts-ignore
import {
    Post,
    START_GET_POST,
    SUCCESS_GET_POST,
    FAIL_GET_POST,
    START_ADD_POST,
    SUCCESS_ADD_POST,
    FAIL_ADD_POST,
    PostActionsTypes,
    ADD_POST,
    GET_POST
  } from "./types.ts";
  import { Dispatch } from "redux";
  //import { ReduxStoreState } from "..";
  import axios from "axios";
  
  // Actions
  export const getPost = (post: Post): PostActionsTypes => ({
    type: GET_POST,
    payload: post,
    subtypes: [START_GET_POST, SUCCESS_GET_POST, FAIL_GET_POST],
    promise: axios.get("https://jsonplaceholder.typicode.com/posts")
  });

  export const addPost = (title: string, body: string): PostActionsTypes => ({
    type: ADD_POST,
    payload: {title:title, body:body},
    subtypes: [START_ADD_POST, SUCCESS_ADD_POST, FAIL_ADD_POST],
    promise: axios.post("https://jsonplaceholder.typicode.com/posts", { title: title, body: body, userId: 1}, {headers:{'Content-type': 'application/json; charset=UTF-8',} })
  });
  
  // Action Dispatchers
  export const startGetPost = (post: Post) => (
    dispatch: Dispatch<PostActionsTypes>,
    //getState: () => ReduxStoreState
  ) => {
    dispatch(getPost(post));
  };

  export const startAddPost = (title: string, body: string) => (
    dispatch: Dispatch<PostActionsTypes>,
    //getState: () => ReduxStoreState
  ) => {
    dispatch(addPost(title, body));
  };