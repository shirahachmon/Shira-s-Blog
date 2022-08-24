// This component/ file called DUMB component. He has ony ts file, and we can enter physical
// Scss design and html.
// Mostly using this in a child component.

import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-square',
  template: `
    <div
      class="game-square rounded-lg border bg-teal-lightest
      shadow-md "
      (click)="changePlayer()"
      [ngClass]="{noClickClass: gameService.winner} "
    >
      <p class="text-grey-darker"> {{ square.state}} </p>
    </div>
   `,
  styles: [`
    .game-square {
      height: 96%;
      text-align: center;
      line-height: 0.85;
      cursor: pointer;
    }

    p {
      display: inline;
      margin-top: 20px;
      text-align: center;
      font-size: 5rem;
      overflow: hidden;
    }

    .noClickClass {
      pointer-events: none;
    }`
  ]
})
export class SquareComponent implements OnInit {

  // Square looks like this:
  //  id: (0-8), state(X|O)
  @Input() square: any;

  constructor( public gameService: GameService) { }

  ngOnInit() {
  }

  changePlayer(){
    this.gameService.isGameRunning = true;

    // Check if the clicked square is availble and not in use.
    if (this.square.state === null ){
      // activePlayer - X | O
      this.square.state =  this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }

}


