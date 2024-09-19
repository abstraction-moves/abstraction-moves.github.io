let s = null
Display(memory)

s = Select(memory)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(...memory)
Clump(s)

LabelLocation(s, { placement: 'right', show_braces: false })

let n2 = Math.floor(n / 2)
let window_size = 4

s = Select(memory.slice(window_size, n2))
s = SpanSelection(s)
Abbreviate(s)

s = Select(memory.slice(n2 + window_size, -4))
s = SpanSelection(s)
Abbreviate(s)

s = Select(memory.slice(0, n2 + Math.floor(window_size / 2)))
s = SpanSelection(s)
Label(s, 'Program', { placement: 'right' })

s = InverseSelection(s)
Label(s, 'Code', { placement: 'right' })

s = Select(memory[IP])
Label(s, 'IP', { placement: 'left' })

Remove(s)
