import  React, {useReducer} from 'react';
import useStable from "react-native-web/dist/modules/useStable";
import createDataContext from "./createDataContext";


const blogReducer = (state, action)=> {
  switch (action.type) {
      case 'delete_blogpost':
          return state.filter((mesw) => mesw.id !== action.payload);

      case 'edit_blogpost':
          return state.map((blogPost) => {

              return blogPost.id === action.payload.id ? action.payload :blogPost;
          });

      case 'add_blogpost':
          return [  ...state, { id: Math.floor (Math.random() * 9999), title: action.payload.title,
              content: action.payload.content

          }];
      default:
          return state;
  }
};

const addBlogPost = (dispatch)=> {
 return (title,content) => {
     dispatch({type: 'add_blogpost', payload: {title, content}});

 };
};

const deleteBlogPost = dispatch => {

    return (id) => {
        dispatch ({type: 'delete_blogpost', payload: id})
    };
}

const editBlogPost = dispatch => {

    return (id, title, content, callback) => {
        dispatch ({type: 'edit_blogpost', payload: {id, title, content }});
        if (callback){
            callback();
        };
    };
}


export const {Context, Provider} = createDataContext(blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost}, [{title: 'Hello', content: 'Hello my friend?', id:1 }])


