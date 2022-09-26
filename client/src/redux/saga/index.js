import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../action";
import * as api from "../../api";
function* getPostSaga(action) {
  try {
    const response = yield call(api.getPost);
    console.log(response);
    yield put(actions.getPost.getPostSuccess(response.data));
  } catch (e) {
    yield put(actions.getPost.getPostFailure(e));
  }
}

function* createPost(action) {
  try {
    const response = yield call(api.createPost, action.payload);
    console.log(response);
    yield put(actions.createPost.createPostSuccess(response.data));
  } catch (e) {
    yield put(actions.createPost.createPostFailure(e));
  }
}

function* updatePost(action) {
  try {
    const response = yield call(api.updatePost, action.payload);
    console.log(response);
    yield put(actions.updatePost.updatePostSuccess(response.data));
  } catch (e) {
    yield put(actions.updatePost.updatePostFailure(e));
  }
}

function* deletePost(action) {
  try {
    const response = yield call(api.deletePost, action.payload);
    console.log(response);
    yield put(actions.deletePost.deletePostSuccess(response.data));
  } catch (e) {
    yield put(actions.deletePost.deletePostFailure(e));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPost.getPostRequest, getPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPost);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePost);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePost);
}

export default mySaga;
