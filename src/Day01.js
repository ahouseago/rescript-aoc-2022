// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Core__Int = require("@rescript/core/src/Core__Int.bs.js");
var Core__Array = require("@rescript/core/src/Core__Array.bs.js");
var Core__Option = require("@rescript/core/src/Core__Option.bs.js");

var input = Fs.readFileSync("./src/day01.txt", "utf8");

var elves = Core__Array.sort(input.trim().split("\n\n").map(function (elf) {
          return Core__Array.reduce(elf.split("\n"), 0, (function (total, val) {
                        return total + Core__Option.getWithDefault(Core__Int.fromString(undefined, val), 0) | 0;
                      }));
        }), (function (a, b) {
        return b - a | 0;
      }));

var part1 = elves.at(0);

var part2 = Core__Array.reduce(elves.slice(0, 3), 0, (function (total, elf) {
        return total + elf | 0;
      }));

console.log("Part 1:", part1);

console.log("Part 2:", part2);

exports.input = input;
exports.elves = elves;
exports.part1 = part1;
exports.part2 = part2;
/* input Not a pure module */