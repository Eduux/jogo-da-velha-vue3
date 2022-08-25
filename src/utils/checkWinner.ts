import { PlayerType } from "@/types/game";

const checkWinner = (squares: Array<number>) => {
    if (squares.includes(0) && squares.includes(1) && squares.includes(2)) return true;
    if (squares.includes(3) && squares.includes(4) && squares.includes(5)) return true;
    if (squares.includes(6) && squares.includes(7) && squares.includes(8)) return true;
    if (squares.includes(0) && squares.includes(4) && squares.includes(8)) return true;
    if (squares.includes(1) && squares.includes(4) && squares.includes(7)) return true;
    if (squares.includes(2) && squares.includes(4) && squares.includes(6)) return true;

    return false;
}

export default (circles: Array<number>, xS: Array<number>) => {
  if (circles.length > 2 && checkWinner(circles)) {
    return PlayerType.CIRCLE
  }

  if (xS.length > 2 && checkWinner(xS)) {
    return PlayerType.X
  }
}