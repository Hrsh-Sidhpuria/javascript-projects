let state = "X";
let tot_moves = 0;
let area = document.querySelectorAll("#btn");
let turn = document.querySelector("span");
let result = document.querySelector(".display_result");

let record = [];
let play = [];
let i = 0;
turn.innerHTML = state;

function restart_game() {
  let state = "X";
  tot_moves = 0;
  area = document.querySelectorAll("#btn");
  turn = document.querySelector("span");
  result = document.querySelector(".display_result");
  record = [];
  play = [];
  i = 0;
  turn.innerHTML = state;
  result.innerHTML = "";
  for (let index = 0; index <= 8; index++) {
    area[index].innerHTML = "";
  }
}

function tic_tac(params) {
  let valid = check(params);

  if (valid === 1) {
    console.log("already ticked , play another move");
    return 0;
  } else {
    if (tot_moves <= 8) {
      tot_moves++;
      if (state === "X") {
        record[tot_moves] = params;
        play[params] = state;
        area[params].innerHTML = state;
        state = "O";
      } else {
        area[params].innerHTML = state;
        record[tot_moves] = params;
        play[params] = state;
        state = "X";
      }

      turn.innerHTML = state;
    } else {
      result.innerHTML = "Game Tie";
      console.log("game Tie");
    }
    if (tot_moves >= 5) {
      let win = winning_cond();
    }
  }
}

function check(params) {
  for (let index = 0; index <= tot_moves; index++) {
    if (record[index] === params) {
      return 1;
    }
  }
  return 0;
}

function winning_cond(params) {
  if (
    (play[0] == "X" && play[1] == "X" && play[2] == "X") ||
    (play[0] == "X" && play[3] == "X" && play[6] == "X") ||
    (play[0] == "X" && play[4] == "X" && play[8] == "X") ||
    (play[1] == "X" && play[4] == "X" && play[7] == "X") ||
    (play[2] == "X" && play[4] == "X" && play[6] == "X") ||
    (play[3] == "X" && play[4] == "X" && play[5] == "X") ||
    (play[6] == "X" && play[7] == "X" && play[8] == "X") ||
    (play[2] == "X" && play[5] == "X" && play[8] == "X")
  ) {
    result.innerHTML = "X Win";

    console.log("X Win");
  } else if (
    (play[0] == "O" && play[1] == "O" && play[2] == "O") ||
    (play[0] == "O" && play[3] == "O" && play[6] == "O") ||
    (play[0] == "O" && play[4] == "O" && play[8] == "O") ||
    (play[1] == "O" && play[4] == "O" && play[7] == "O") ||
    (play[2] == "O" && play[4] == "O" && play[6] == "O") ||
    (play[3] == "O" && play[4] == "O" && play[5] == "O") ||
    (play[6] == "O" && play[7] == "O" && play[8] == "O") ||
    (play[2] == "O" && play[5] == "O" && play[8] == "O")
  ) {
    result.innerHTML = "O Win";

    console.log("O Win");
  } else {
    if (tot_moves === 9) {
      result.innerHTML = "Game Tie";
    }
  }
}
