import { Post } from "../../redux/posts/types";
import { ClickHandlerParam } from "../../types";

// Define prop types for this component
export interface PostListProps {
  posts: Post[];
  handleUpdate: () => void
}