import { Post, Posts } from "./redux/posts/types";

// Define prop types for this component
export interface AppProps {}

export interface LinkDispatchProps {
  startGetPost: (posts: Post) => void;
  startAddPost: (title: string, body: string) => void;
}

export interface LinkStateProps {
  posts: Post[];
}

// Define state property types for this component
export interface AppState {
  [key: string]: string | number;
}