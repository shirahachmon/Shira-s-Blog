import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  public board: any = [];
  boardSize: number = 9;
  activePlayer: string = "X";
  turnCount: 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor() {
     this.newGame()
  }

  newGame(){
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver =  false;
    this.winner = false;
    this.board = this.createBoard();
  }

  createBoard(){
    // Initial the board from 0-8 indexes.
    // With all states equal to null.
    let board = [];
    for( let i = 0; i < 9; i ++ ){
      board.push( { id: i, state: null } )
    };
    return board
  }

  // Gives the current mode of the board.
   get getBoard (){
     return this.board
   }

   // Setting the board.
   //Not in use..
   set setBoard( board: any  ){
     this.board = [...board]
   }


   // squareClicked will include square: id: (0-9),  state: X | O
  changePlayerTurn(squareClicked: any){
    this.updateBoard(squareClicked);
    if(!this.isGameOver) this.activePlayer = this.activePlayer === "X" ? "O" : "X"
    this.turnCount ++;
    this.isGameOver = this.isGameOver ? true : false;
   }

   // Get squareClicked- update the square id in the board with the state(X|O).
  updateBoard( squareClicked: any ){
    this.board[ squareClicked.id ].state = squareClicked.state;
    // Call the get isWinner to check if this state made him a winner.
    if (this.isWinner) {
       this.winner = true;
       this.isGameRunning = false;
       this.isGameOver = true;
    }
  }

  // Game is over if the made more than 9 turns
  // Or because there is a winner.
  get gameOver(): boolean{
    return this.turnCount > 8 || this.winner ? true : false
  }

  // returns true or false by checking board.
  get isWinner(): boolean{
    //Check row, diagnol, column.
    return this.checkDiagnol() || this.checkRows(this.board, "row") || this.checkRows(this.board, "col") ? true : false;
  }

    // Checks neither there is a win from a column or row.
   checkRows( board: any, mode: any ): boolean{
    const
    //ShortCut to an if statement.
      ROW = mode === "row" ? true : false,
      DIST = ROW ? 1 : 3, // or 1 or 3, when its col the jumping will be 3, when a row 1.
      increasement = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

      // If from a row
      for ( let i = 0; i < NUMTIMES; i += increasement ){

        let
          firstSquare = board[i].state,
          secondSquare =  board[i + DIST].state,
          thirdSquare = board[ i + ( DIST * 2)].state;

        if ( firstSquare && secondSquare && thirdSquare  ){
           if ( firstSquare === secondSquare && secondSquare === thirdSquare ) return true
        }
      }
      return false
   }

   checkDiagnol (){
    const timesRun = 2,
      midSquare = this.board[4].state;

    for( let i = 0; i <= timesRun; i+=2 ){

     let
      upperCorner = this.board[i].state,
      lowerCorner =  this.board[8 - i].state;

      if ( midSquare && upperCorner && lowerCorner  ){
          if( midSquare === upperCorner && upperCorner === lowerCorner) return true
      }
    }

     return false
   }

}
