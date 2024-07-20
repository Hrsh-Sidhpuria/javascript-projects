let human = "O";
let ai = "X";
let tot_moves = 0;
let area = document.querySelectorAll("#btn");
let result = document.querySelector("div");
let finalResult = document.querySelector(".display_result");
let record = [];
let play = [];

let turn;
let i = 0;

function tic_tac(params) {
  let winner;
  let GameOver = false;
  if (area[params].textContent === "") {
    area[params].textContent = human;
    bestmove();

    let result = winning_cond();
    if (result != null) {
      GameOver = true;
      if (result == 1) {
        winner = "X Win";
      } else if (result == 0) {
        winner = "Game Tie";
      } else {
        winner = "You Win";
      }
      finalResult.textContent = winner;
    }
  }
}

function bestmove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
    if (area[i].textContent == "") {
      area[i].textContent = ai;
      let score = minimax(0, false);
      area[i].textContent = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  console.log(bestScore);
  console.log(move);
  area[move].textContent = ai;
}
function minimax(depth, isMaximizing) {
  let score = winning_cond();
  if (score != null) {
    return score;
  } else {
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (area[i].textContent == "") {
          area[i].textContent = ai;
          let score = minimax(depth + 1, false);
          area[i].textContent = "";
          if (score > bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (area[i].textContent == "") {
          area[i].textContent = human;
          score = minimax(depth + 1, true);
          area[i].textContent = "";
          if (score < bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore;
    }
  }
}

function restart_game() {
  area = document.querySelectorAll("#btn");
  result = document.querySelector(".display_result");
  result.textContent = "";
  for (let index = 0; index <= 8; index++) {
    area[index].innerHTML = "";
  }
}

function winning_cond() {
  let count = 0;
  if (
    (area[0].textContent == "X" &&
      area[1].textContent == "X" &&
      area[2].textContent == "X") ||
    (area[0].textContent == "X" &&
      area[3].textContent == "X" &&
      area[6].textContent == "X") ||
    (area[0].textContent == "X" &&
      area[4].textContent == "X" &&
      area[8].textContent == "X") ||
    (area[1].textContent == "X" &&
      area[4].textContent == "X" &&
      area[7].textContent == "X") ||
    (area[2].textContent == "X" &&
      area[4].textContent == "X" &&
      area[6].textContent == "X") ||
    (area[3].textContent == "X" &&
      area[4].textContent == "X" &&
      area[5].textContent == "X") ||
    (area[6].textContent == "X" &&
      area[7].textContent == "X" &&
      area[8].textContent == "X") ||
    (area[2].textContent == "X" &&
      area[5].textContent == "X" &&
      area[8].textContent == "X")
  ) {
    console.log("X Win");
    return 1;
  } else if (
    (area[0].textContent == "O" &&
      area[1].textContent == "O" &&
      area[2].textContent == "O") ||
    (area[0].textContent == "O" &&
      area[3].textContent == "O" &&
      area[6].textContent == "O") ||
    (area[0].textContent == "O" &&
      area[4].textContent == "O" &&
      area[8].textContent == "O") ||
    (area[1].textContent == "O" &&
      area[4].textContent == "O" &&
      area[7].textContent == "O") ||
    (area[2].textContent == "O" &&
      area[4].textContent == "O" &&
      area[6].textContent == "O") ||
    (area[3].textContent == "O" &&
      area[4].textContent == "O" &&
      area[5].textContent == "O") ||
    (area[6].textContent == "O" &&
      area[7].textContent == "O" &&
      area[8].textContent == "O") ||
    (area[2].textContent == "O" &&
      area[5].textContent == "O" &&
      area[8].textContent == "O")
  ) {
    console.log("O Win");
    return -1;
  } else {
    for (let i = 0; i < 9; i++) {
      if (area[i].textContent != "") {
        count++;
      }
    }
    if (count == 8) {
      return 0;
    }
  }
}
