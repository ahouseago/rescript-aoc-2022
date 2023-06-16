// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Core__Array = require("@rescript/core/src/Core__Array.js");

var input = Fs.readFileSync("./src/day02.txt", "utf8");

function part1(score, strat) {
  var tmp;
  switch (strat) {
    case "A X" :
        tmp = 4;
        break;
    case "A Y" :
        tmp = 8;
        break;
    case "A Z" :
        tmp = 3;
        break;
    case "B X" :
        tmp = 1;
        break;
    case "B Y" :
        tmp = 5;
        break;
    case "B Z" :
        tmp = 9;
        break;
    case "C X" :
        tmp = 7;
        break;
    case "C Y" :
        tmp = 2;
        break;
    case "C Z" :
        tmp = 6;
        break;
    default:
      tmp = 0;
  }
  return score + tmp | 0;
}

function part2(score, strat) {
  var tmp;
  switch (strat) {
    case "A X" :
        tmp = 3;
        break;
    case "A Y" :
        tmp = 4;
        break;
    case "A Z" :
        tmp = 8;
        break;
    case "B X" :
        tmp = 1;
        break;
    case "B Y" :
        tmp = 5;
        break;
    case "B Z" :
        tmp = 9;
        break;
    case "C X" :
        tmp = 2;
        break;
    case "C Y" :
        tmp = 6;
        break;
    case "C Z" :
        tmp = 7;
        break;
    default:
      tmp = 0;
  }
  return score + tmp | 0;
}

function calculate(reducer) {
  return Core__Array.reduce(input.trim().split("\n"), 0, reducer);
}

console.log("Part 1:", calculate(part1));

console.log("Part 2:", calculate(part2));

exports.input = input;
exports.part1 = part1;
exports.part2 = part2;
exports.calculate = calculate;
/* input Not a pure module */
