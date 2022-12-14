import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
 export class SearchService{
  apiRoot: string= 'http://itunes.apple.com/search';
  results: any;
  loading: boolean;

  constructor(private http:HttpClient){
    this.results=[];
    this.loading=false;
  }

  search(term: string){
    // async call using the http client to achive the api.
    // promises and observables.
    // here we will choose to use a promises.

    let promise= new Promise((resolve, reject)=>{
      let apiURL= `${this.apiRoot}?term=${term}$media=music&limit=20`;
      this.http.get(apiURL)
      .toPromise()
      .then((res) => {
          // console.log(res);
          this.results= res;
          resolve(1000);
        },
        msg=> {
          reject();
        }
      )})
    return promise;
  }
}


@Component({
  selector: 'app-tricks',
  template: `
  <form class="form-inline">
    <div class="form-group">
      <input type="search"
              class="form-control"
              placeholder="Enter search string..."
              #search>
    </div>

    <button type="button"
            class="btn btn-primary"
            (click)="doSearch(search.value)"> Search
    </button>
  </form>

  <hr/>
    <div class="text-center">
      <p class="lead" *ngIf="loading">Loading...</p>
    </div>
  <ul class="list-group">
    <li *ngFor="let track of array" class="list-group-item">

    <img style="width: 40px; height: 40px;" src="{{track.artworkUrl30}}">
    <a target="_blank" href="{{track.trackViewUrl}}">
        {{track.trackName}}
        </a>
    </li>
  </ul>

  `,
  styleUrls: ['./tricks.component.scss'],
})
export class TricksComponent{

    constructor(private itunes: SearchService){}
  // hasError= true;

  loading: boolean= false;

  array: any[]=[];
    doSearch(term: any){
      this.loading=true;
      this.itunes.search(term).then(()=>{
        this.loading=false;
      })
      this.array=this.itunes.results.results;
    }
}











      // First- settimeout, the loop call back from hell example.
      // const start = (callback:any) => {
      //   setTimeout(() => {
      //     callback('Hello');
      //     setTimeout(() => {
      //       callback('And Welcome');
      //       setTimeout(() => {
      //         callback('To Async Await Using TypeScript');
      //       }, 1000);
      //     }, 1000);
      //   }, 1000);
      // };
      // start((text:any) => console.log(text));


      // Second- as the first, butwithout loop from hell.
      // const wait = (ms:any) => new Promise(res => setTimeout(res, ms));
      // const startAsync = async (callback:any) => {
      //   await wait(1000);
      //   callback('Hello');
      //   await wait(1000);
      //   callback('And Welcome');
      //   await wait(1000);
      //   callback('To Async Await Using TypeScript');
      // };
      // startAsync((text:any) => console.log(text));


      // Third
      // Consoles true, false, true
      // new Promise<boolean>((res, rej) => {
      //   res(true);
      // })
      //   .then(res => {
      //     console.log(res);
      //     return false;
      //   })
      //   .then(res => {
      //     console.log(res);
      //     return true;
      //   })
      //     .then(res => {
      //     console.log(res);
      //   })
      //   .catch(error => {
      //     console.log('ERROR:', error.message);
      // });

