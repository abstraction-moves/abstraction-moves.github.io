let table = []
for (let i = 0; i < variables.length; i++) {
    for (let j = 0; j < variables[i].length; j++) {
        table.push({ variable: Object.keys(variables[i][j])[0], values: Object.values(variables[i][j])[0] })
    }
}

let s = null
let layout = [env, table]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 100 })

s = Select(env)
SetVisualForm(s, 'Graph', { pointer_graph: true, horizontal_margin: 0 })

s = Select(table)
SetVisualForm(s, 'Grid', { padding: [5, 5] })

s = Select(env.stack)
s = SplitSelection(s)
Clump(s)

let s2 = null
for (let i = 0; i < 3; i++) {
    s2 = Select(...table.slice(i * 2, i * 2 + 2))
    s2 = SpanSelection(s2)
    Connect(s[i], s2)
}
