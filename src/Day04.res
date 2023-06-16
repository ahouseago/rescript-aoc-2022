let input = Node.Fs.readFileSync("./src/day04.txt", #utf8)

let completeOverlap = (a, b, c, d) => (a <= c && b >= d) || (a >= c && b <= d)
let overlap = (a, b, c, d) => a <= d && b >= c

let calculate = fn =>
  input
  ->String.split("\n")
  ->Array.reduce(0, (containedPairs, line) => {
    let pair =
      line
      ->String.splitByRegExp(%re("/[,-]/"))
      ->Array.map(Option.mapWithDefault(_, 0, str => str->Int.fromString->Option.getWithDefault(0)))
    switch pair {
    | [a, b, c, d] =>
      if fn(a, b, c, d) {
        containedPairs + 1
      } else {
        containedPairs
      }
    | _ => containedPairs // Ignore any where there aren't 4 numbers to compare
    }
  })

Js.log2("Part 1:", calculate(completeOverlap))
Js.log2("Part 2:", calculate(overlap))
