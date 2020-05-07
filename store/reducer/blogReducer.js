import { ADD_POST, DELETE_POST, EDIT_POST } from '../types/blogTypes';

export const blogReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return [ ...state, {
                id: Math.floor(Math.random() * 100000).toString(),
                title: action.payload.title, 
                content: action.payload.content, 
            } ];
        case DELETE_POST:
            return state.filter(post => post.id !== action.payload);
        case EDIT_POST:
            return state.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload;
                } else {
                    return post;
                }
                // return post.id === action.payload.id ? action.payload : post;
            });
        default:
            return state;
    }
}
