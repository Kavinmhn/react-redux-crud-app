import { AxiosResponse } from "axios";

export const GET_POST = "GET_POST";
export const START_GET_POST = "START_GET_POST";
export const SUCCESS_GET_POST = "SUCCESS_GET_POST";
export const FAIL_GET_POST = "FAIL_GET_POST";

export const ADD_POST = "ADD_POST";
export const START_ADD_POST = "START_ADD_POST";
export const SUCCESS_ADD_POST = "SUCCESS_ADD_POST";
export const FAIL_ADD_POST = "FAIL_ADD_POST";

export const UPDATE_POST = "UPDATE_POST";
export const START_UPDATE_POST = "START_UPDATE_POST";
export const SUCCESS_UPDATE_POST = "SUCCESS_UPDATE_POST";
export const FAIL_UPDATE_POST = "FAIL_UPDATE_POST";

// Define post type
export interface Posts {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

export interface Post {
title: string;
  body: string;
  id?: number;
  userId?: number;
}

// Define Different action type
interface GetPostAction {
    type: string;
    payload: Posts[];
    subtypes?: object[];
    promise?: Promise<AxiosResponse<any>>;
  }

interface AddPostAction {
  type: string;
  payload: Post;
  subtypes?: string[];
  promise?: Promise<AxiosResponse<any>>;
}


// Define reducer state of this module
export interface PostState {
  posts: Post[];
  loading: boolean;
  error: boolean;
}

export type PostActionsTypes = GetPostAction | AddPostAction ;