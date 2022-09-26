import React from "react";
import { Fab, Modal, Box, Button, Typography, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/action";
import FileBase64 from "react-file-base64";
import { createPostSelector } from "../../redux/selector";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Mode = () => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const selector = useSelector(createPostSelector);
  // console.log("selector", selector);
  const handlePost = React.useCallback(() => {
    dispatch(action.createPost.createPostRequest({ title, content, image }));
    setOpen(false);
    setTitle("");
    setContent("");
  }, [dispatch, title, content, image]);

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        <Add />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            {" "}
            Create Post
          </Typography>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Content"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setImage(base64)}
            type="file"
            accept="image/*"
            sx={{
              mb: 2,
            }}
          />
          <Button variant="contained" fullWidth onClick={handlePost}>
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Mode;
