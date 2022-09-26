import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as action from "../../../redux/action";
// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { MoreVertOutlined, Favorite, Share } from "@mui/icons-material";
const Post = ({ post }) => {
  const [favorites, setFavorites] = React.useState(false);
  const dispatch = useDispatch();
  const handlerBtn = React.useCallback(() => {
    dispatch(
      action.updatePost.updatePostRequest({
        ...post,
        likeCount: post.likeCount + 1,
      })
    );
    setFavorites(!favorites);
  }, [dispatch, post]);

  const handlerDelte = React.useCallback(() => {
    dispatch(action.deletePost.deletePostRequest(post._id));
  }, [dispatch, post]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined onClick={handlerDelte} />
          </IconButton>
        }
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia component="img" image={post.image} alt="Image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite
            // onClick={() => setFavorites(!favorites)}
            color={favorites ? "primary" : "action"}
            onClick={handlerBtn}
          />
          {post.likeCount} likes
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
