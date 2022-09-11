import * as PostActions from '../ngrx-redux-tutorial/post.actions';
import {Post} from '../ngrx-redux-tutorial/post.model';

export type Action= PostActions.All;

const defultState: Post={
  text: 'Hello, I am the defult post..',
  likes: 0
}

const newState= (state:any, newData:any) => {
  return Object.assign({}, state, newData)
}

export function postReducer(state: Post= defultState , action: Action){

  console.log(action.type, state);

  switch(action.type){

    case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload})

    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes+1})

    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes-1})

    case PostActions.RESET:
      return defultState

    default:
      return state;

  }
}
