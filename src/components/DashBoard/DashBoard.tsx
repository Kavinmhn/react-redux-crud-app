import React from "react";
import { PostListProps } from "./interfaces";
//import styles from "./styles";
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material'
// @ts-ignore
import { post } from '../../redux/posts/types.ts'

//===========================================================================================
//PLESE READ THIS:
//unable to install @mareial-ui/core with current react version to use MakeStyle from /styles.
//So, I'm using inline CSS here.
//===========================================================================================
const DashBoard: React.FC<PostListProps> = ({ posts, handleUpdate }) => {

  const postsSet = posts[0] ? posts[0] : []

// @ts-ignore
  const content = postsSet.map((post, index) => (
    <Box key={post.id} sx={{ border: '1px solid #ccc', marginTop: '20px', marginBotton: '10px', borderRadius: "5px", boxShadow: "2px", padding: "20px" }}>
      {/*Please check the above comment regarding the inline CSS here*/}
      <p><b>{post.id}: {post.title}</b></p>
      <p>{post.body}</p>
{/* @ts-ignore */}
      <Button onClick={() => handleUpdate(post.id)} >Update</Button>
    </Box>
  ));

  return <><Container >{content}</Container></>;
};

export default DashBoard;