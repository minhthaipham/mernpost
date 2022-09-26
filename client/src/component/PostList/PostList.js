import React from "react";
import { Box, Fab, Grid, Typography } from "@mui/material";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/action";
import { postSelector } from "../../redux/selector";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import Mode from "../Modal/Modal";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  React.useEffect(() => {
    dispatch(action.getPost.getPostRequest());
  }, [dispatch]);
  console.log("PostList", posts);

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
      <Mode />
    </Grid>
  );
};

export default PostList;
