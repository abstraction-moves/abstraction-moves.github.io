let new_code = [...chunk.code]
for (let i = 0; i < 5; i++) new_code.push(null)

let layout = [chunk, new_code]

let s = null
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(chunk)
SetVisualForm(s, 'Graph', { pointer_graph: true })

s = Select(chunk)
SetVisualForm(s, 'Hierarchy')

s = Select(chunk.code, new_code)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = SelectByValue(new_code, (v) => v == null)
s = SpanSelection(s)
Clump(s)

s = Select(...chunk.code)
AutoConnect(s)
