import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Post } from '../ngrx-redux-tutorial/post.model';
import * as PostActions from '../ngrx-redux-tutorial/post.actions';


interface AppState{
  post: Post;
}

@Component({
  selector: 'app-ngrx-redux-tutorial',
  templateUrl: './ngrx-redux-tutorial.component.html',
  styleUrls: ['./ngrx-redux-tutorial.component.scss']
})
export class NgrxReduxTutorialComponent {

  post: Observable<Post>
  text: string;

  // message$: Observable<string>
  constructor(private store: Store<AppState>) {
    this.post= this.store.select('post')
  }

  editText(){
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  resetPost(){
    this.store.dispatch(new PostActions.Reset())
  }


  upvote(){
    this.store.dispatch(new PostActions.Upvote())
  }


  downvote(){
    this.store.dispatch(new PostActions.Downvote())
  }

}
