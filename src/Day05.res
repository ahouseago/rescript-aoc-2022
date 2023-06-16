let input = Node.Fs.readFileSync("./src/day05.txt", #utf8)

// type splitInput = State(string) | Instructions(array<string>)

type splitInput = (string, array<string>)

let (state, instructions) = switch input->String.trim->String.split("\n\n") {
// | [state, instructions] => (State(state), Instructions(instructions->String.trim->String.split("\n")))
| [state, instructions] => (state, instructions->String.trim->String.split("\n"))
| _ => ("", [])
}

Js.log(state)
