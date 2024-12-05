let new_code = [...chunk.code]
for (let i = 0; i < 5; i++) new_code.push(null)

let layout = [chunk, new_code]

let s = null
Display(layout)

s = Select(layout)
Revisualize(s, 'Sequence', { style: 'Space Separated' })

s = Select(chunk)
Revisualize(s, 'Graph', { pointer_graph: true })

s = Select(chunk)
Revisualize(s, 'Hierarchy')

s = Select(chunk.code, new_code)
Revisualize(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = SelectByCondition(new_code, (v) => v == null)
s = SpanSelection(s)
Clump(s)

s = Select(...chunk.code)
AutoConnect(s)
