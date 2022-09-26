import React from "react";
import Header from "../component/Header/Header";
import { Container } from "@mui/material";
import PostList from "../component/PostList/PostList";
const HomePage = () => {
  return (
    <Container>
      <Header />
      <PostList />
    </Container>
  );
};

export default HomePage;
