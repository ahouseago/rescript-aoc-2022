// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Core__List = require("@rescript/core/src/Core__List.bs.js");
var Core__Array = require("@rescript/core/src/Core__Array.bs.js");

var input = Fs.readFileSync("./src/day03.txt", "utf8");

function getScore(str) {
  return (str.charCodeAt(0) | 0) - (
          str.toLowerCase() === str ? 96 : 38
        ) | 0;
}

var part1 = Core__Array.reduce(input.trim().split("\n"), 0, (function (total, str) {
        var middle = str.length / 2 | 0;
        var last = str.slice(middle, str.length);
        return total + Core__Array.reduce(str.slice(0, middle).split(""), 0, (function (score, letter) {
                      if (last.includes(letter)) {
                        return getScore(letter);
                      } else {
                        return score;
                      }
                    })) | 0;
      }));

function getBadgeScore(elf1, elf2, elf3) {
  return Core__Array.reduce(elf1.split(""), 0, (function (score, letter) {
                if (elf2.includes(letter) && elf3.includes(letter)) {
                  return getScore(letter);
                } else {
                  return score;
                }
              }));
}

function getNextScore(_strings, _score) {
  while(true) {
    var score = _score;
    var strings = _strings;
    if (strings) {
      var match = strings.tl;
      if (match) {
        var match$1 = match.tl;
        if (match$1) {
          _score = score + getBadgeScore(strings.hd, match.hd, match$1.hd) | 0;
          _strings = match$1.tl;
          continue ;
        }
        
      }
      
    }
    console.error("Got list with " + Core__List.length(strings).toString() + " elements");
    return score;
  };
}

var part2 = getNextScore(Core__List.fromArray(input.trim().split("\n")), 0);

console.log("Part 1:", part1);

console.log("Part 2:", part2);

exports.input = input;
exports.getScore = getScore;
exports.part1 = part1;
exports.getBadgeScore = getBadgeScore;
exports.getNextScore = getNextScore;
exports.part2 = part2;
/* input Not a pure module */
