let s = null
Display(openUpvalues)
Display(memory)

s = Select(openUpvalues)
SetVisualForm(s, 'Graph', { pointer_graph: true })

s = Select(memory)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = SelectNodes(openUpvalues)
SetVisualForm(s, 'Hierarchy', { style: 'Bordered' })

s = Select(memory.slice(0, padding_size), memory.slice(memory.length - padding_size + 1))
s = SpanSelection(s)
Abbreviate(s)

s = Select(memory[memory.length - padding_size])
Hide(s)

s = Select(memory[padding_size])
Label(s, 'a')

s = Select(memory[padding_size + 1])
Label(s, 'f')

s = Select(memory[padding_size + 2])
Label(s, 'b')

s = Select(memory[padding_size + 3])
Label(s, 'g')

s = Select(memory[padding_size + 4])
Label(s, 'c')

s = Select(memory[padding_size + 5])
Label(s, 'h')

let node = openUpvalues

s = Select(node.location)
Connect(s, Select(memory[node.location]))

node = node.next
s = Select(node.location)
Connect(s, Select(memory[node.location]))

node = node.next
s = Select(node.location)
Connect(s, Select(memory[node.location]))

Remove(s)
