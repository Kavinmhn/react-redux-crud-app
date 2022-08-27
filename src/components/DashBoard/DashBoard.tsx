import React from "react";
import { PostListProps } from "./interfaces";
//import styles from "./styles";
import Container from '@mui/material/Container';
import { Box } from '@mui/material'

  //===========================================================================================
  //PLESE READ THIS:
  //unable to install @mareial-ui/core with current react version to use MakeStyle from /styles.
  //So, I'm using inline CSS here.
  //There may be alternative option. But no time to find it out.
  //===========================================================================================
const DashBoard: React.FC<PostListProps> = ({ posts }) => {
  
  const postsSet = posts[0] ? posts[0] : []
  const content = postsSet.map((post, index) => (
    <Box key={post.id} sx={{ border: '1px solid #ccc', marginTop: '20px', marginBotton: '10px', borderRadius: "5px", boxShadow:"2px", padding: "20px"  }}>
      <p><b>{post.id}: {post.title}</b></p>
      <p>{post.body}</p>
    </Box>
  ));

  return <><Container >{content}</Container></>;
};

export default DashBoard;