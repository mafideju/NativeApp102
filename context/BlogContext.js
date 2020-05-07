import createDataContext from './createDataContext';
import { blogReducer } from '../store/reducer/blogReducer';
import { addPost, removePost, editPost } from '../store/action/blogAction';

export const { Context, Provider } = createDataContext(blogReducer, { addPost, removePost, editPost }, [{ id: '1', title: 'Forçæ Márcio', content: 'Não desista, pra cima deles' }]);