import createDataContext from './createDataContext';
import { blogReducer } from '../store/reducer/blogReducer';
import { addPost, removePost, editPost } from '../store/action/blogAction';

export const { Context, Provider } = createDataContext(blogReducer, { addPost, removePost, editPost }, [{ id: '1', title: 'Seja Bem Vinda!', content: 'Olá Amanda, estou aqui para ajudar você a guardar alguma informação que queira. Ainda não estou conectada a um banco de dados, mas estão trabalhando nesta funcionalidade e logo estarei prontinha para guardar para sempre suas informações em muito segredo. Se quiser, pode me apagar, mas esta operação não poderá ser desfeita. É só clicar no lixinho ao lada. Bem, é isso. Tchau...!!!' }]);