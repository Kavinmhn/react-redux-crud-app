// @ts-ignore
import {
    Post,
    START_GET_POST,
    SUCCESS_GET_POST,
    FAIL_GET_POST,
    START_ADD_POST,
    SUCCESS_ADD_POST,
    FAIL_ADD_POST,
    START_UPDATE_POST,
    SUCCESS_UPDATE_POST,
    FAIL_UPDATE_POST,
    PostActionsTypes,
    ADD_POST,
    UPDATE_POST,
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

  export const updatePost = (id:number, title: string, body: string, userId: number): PostActionsTypes => (
    {
    type: UPDATE_POST,
    payload: {userId, id, title, body},
    subtypes: [START_UPDATE_POST, SUCCESS_UPDATE_POST, FAIL_UPDATE_POST],
    promise: axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { id: id, title: title, body: body, userId: 1}, {headers:{'Content-type': 'application/json; charset=UTF-8',} })
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

  export const startUpdatePost = (id:number, title:string, body:string, userId:number) => (
    dispatch: Dispatch<PostActionsTypes>,
    //getState: () => ReduxStoreState
  ) => {
    dispatch(updatePost(id, title, body, userId));
  };