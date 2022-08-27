import {
    START_GET_POST,
    SUCCESS_GET_POST,
    FAIL_GET_POST,
    START_ADD_POST,
    SUCCESS_ADD_POST,
    FAIL_ADD_POST,
    PostState,
    PostActionsTypes
  } from "./types.ts";
  
  const initialState: PostState = {
    posts: [],
    loading: false,
    error: false
  };
  
  export function postReducer(
    state: PostState = initialState,
    action: PostActionsTypes
  ): PostState {
    switch (action.type) {
        case START_GET_POST:
        return { ...state, loading: true };
  
      case SUCCESS_GET_POST:
        return { ...state, posts: [...state.posts, action.payload] };
  
      case FAIL_GET_POST:
        return { ...state, loading: false, error: true };


      case START_ADD_POST:{
        return { ...state, loading: true };
      }
  
      case SUCCESS_ADD_POST:{
        const updatedList = [...state.posts]
        updatedList[0].push({id: updatedList[0].length+1, userId: 1, title: action.payload.title, body: action.payload.body})
       
        return { ...state, posts: [...updatedList] };
      }
      case FAIL_ADD_POST:
        return { ...state, loading: false, error: true };
  
      default:
        return { ...state };
    }
  }