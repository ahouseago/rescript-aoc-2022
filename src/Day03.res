let input = Node.Fs.readFileSync("./src/day03.txt", #utf8)

let getScore = str =>
  str->String.charCodeAt(0)->Float.toInt - if String.toLowerCase(str) === str {
      96
    } else {
      38
    }

let part1 =
  input
  ->String.trim
  ->String.split("\n")
  ->Array.reduce(0, (total, str) => {
    let middle = String.length(str) / 2
    let last = String.slice(str, ~start=middle, ~end=String.length(str))

    total +
    String.slice(str, ~start=0, ~end=middle)
    ->String.split("")
    ->Array.reduce(0, (score, letter) =>
      if String.includes(last, letter) {
        getScore(letter)
      } else {
        score
      }
    )
  })

let getBadgeScore = (elf1, elf2, elf3) => {
  elf1
  ->String.split("")
  ->Array.reduce(0, (score, letter) =>
    if String.includes(elf2, letter) && String.includes(elf3, letter) {
      getScore(letter)
    } else {
      score
    }
  )
}

let rec getNextScore = (strings, score) => {
  switch strings {
  | list{elf1, elf2, elf3, ...rest} => getNextScore(rest, score + getBadgeScore(elf1, elf2, elf3))
  | l => {
      Console.error(`Got list with ${l->List.length->Int.toString} elements`)
      score
    }
  }
}

let part2 = input->String.trim->String.split("\n")->List.fromArray->getNextScore(0)

Js.log2("Part 1:", part1)
Js.log2("Part 2:", part2)
