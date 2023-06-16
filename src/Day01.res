let input = Node.Fs.readFileSync("./src/day01.txt", #utf8)

let elves =
  input
  ->String.trim
  ->String.split("\n\n")
  ->Array.map(elf =>
    String.split(elf, "\n")->Array.reduce(0, (total, val) =>
      total + Option.getWithDefault(Int.fromString(val), 0)
    )
  )
  ->Array.sort((a, b) => b - a)

// Part 1 just uses the first elf.
let part1 = elves->Array.at(0)
// Part 2 sums the top 3 elves.
let part2 =
  elves->Array.slice(~start=0, ~end=3)->Array.reduce(0, (total, elf) => total + elf)

Js.log2("Part 1:", part1)
Js.log2("Part 2:", part2)
