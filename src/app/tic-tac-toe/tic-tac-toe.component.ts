import { Component} from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {

  constructor( public gameService: GameService){

  }

  resetGame(){
    this.gameService.newGame()
  }
}
