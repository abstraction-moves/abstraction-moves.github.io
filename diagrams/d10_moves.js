Display(cmd)
Display(cmd_split)

let s = Select(cmd)
let s2 = Select(...cmd_split)
LabelLocation(s2, { show_braces: false })

Connect(s, s2)

Remove(s)
Remove(s2)
