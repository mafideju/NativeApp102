import { ADD_POST, DELETE_POST, EDIT_POST } from "../types/blogTypes";

export const addPost = dispatch => (title, content, cb) => {
    dispatch({ type: ADD_POST, payload: { title, content } });
    cb ? cb() : null;
};

export const removePost = dispatch => id => {
    dispatch({ type: DELETE_POST, payload: id })
};

export const editPost = dispatch => (id, title, content, cb) => {
    dispatch({ type: EDIT_POST, payload: { id, title, content } });
    cb ? cb() : null;
};
