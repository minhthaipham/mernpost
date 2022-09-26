import { INIT_STATE } from "../../constant";
import {
  createPost,
  getPost,
  getType,
  updatePost,
  deletePost,
} from "../action";
export default function postReducer(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPost.getPostRequest):
      return {
        ...state,
        loading: true,
      };
    case getType(getPost.getPostSuccess):
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case getType(getPost.getPostFailure):
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case getType(deletePost.deletePostSuccess):
      return {
        ...state,
        data: state.data.filter((post) => post._id !== action.payload._id),
      };

    default:
      return state;
  }
}
