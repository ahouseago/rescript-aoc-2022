let input = Node.Fs.readFileSync("./src/day02.txt", #utf8)

let part1 = (score: int, strat: string) => {
  score +
  switch strat {
  | "A X" => 4
  | "A Y" => 8
  | "A Z" => 3
  | "B X" => 1
  | "B Y" => 5
  | "B Z" => 9
  | "C X" => 7
  | "C Y" => 2
  | "C Z" => 6
  | _ => 0
  }
}
let part2 = (score: int, strat: string) => {
  score +
  switch strat {
  | "A X" => 3
  | "A Y" => 4
  | "A Z" => 8
  | "B X" => 1
  | "B Y" => 5
  | "B Z" => 9
  | "C X" => 2
  | "C Y" => 6
  | "C Z" => 7
  | _ => 0
  }
}

let calculate = reducer => input->String.trim->String.split("\n")->Array.reduce(0, reducer)

Js.log2("Part 1:", calculate(part1))
Js.log2("Part 2:", calculate(part2))
