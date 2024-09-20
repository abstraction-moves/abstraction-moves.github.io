let s = null
let s2 = null
Display(G)
s = Select(G)
SetVisualForm(s, 'Graph', { orientation: 'Horizontal', directed: false })

Display(M)
s = Select(M)
SetVisualForm(s, 'Grid')

s = Select(G.vertices[5], G.vertices[6], G.vertices[9], G.vertices[10])
Fragment(s)

Clump(s, { scale: 0.5 })
Label(s[0], 'i', { placement: 'left', push_layout: false, show_braces: false })
Label(s[1], 'j', { placement: 'right', push_layout: false, show_braces: false })
Label(s[2], 'i`', { placement: 'left', push_layout: false, show_braces: false })
Label(s[3], 'j`', { placement: 'right', push_layout: false, show_braces: false })

s = Select(G.vertices[5], G.vertices[9])
s2 = Select(G.vertices[10], G.vertices[6])
Connect(s, s2, { directed: false })

s = Select(G.vertices[5], G.vertices[9])
s2 = Select(G.vertices[6], G.vertices[10])
Connect(s, s2, { directed: false })
Remove(s2)

s = SelectByCondition(M, (v) => v == 1)
s = SpanSelection(s)
EncircleBackground(s)
Remove(s)

// s = Select(G)
// SetVisualForm(s)

// let sub_M = M.slice(i_row, i_row + 2).map((c) => c.slice(i_col, i_col + 2))

// Display(Var('sub_M'))

// s = Select(M)
// SetVisualForm(s, 'Grid', { style: 'Bordered' })

// let i = M[i_row][i_col]
// let i_p = M[i_row + 1][i_col]

// let j = M[i_row][i_col + 1]
// let j_p = M[i_row + 1][i_col + 1]

// s = Select(i, i_p, j, j_p, { within: Var('sub_M') })

// Remove(s)
