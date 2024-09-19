let u_array = U.map((v) => v.data)
let m_array = M.map((v) => v.map((v2) => v2.data))

let s = null
Display(u_array)
Display(m_array)

s = Select(u_array)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(m_array)
SetVisualForm(s, 'Graph', { pointer_graph: true, orientation: 'Horizontal', centered: false })

s = Select(U[a], U[b], { within: u_array })
Clump(InverseSelection(s))
Hide(s)

Style(s, { background: 'bisque' })
Label(s[0], 'a', { placement: 'top', push_layout: false })
Label(s[1], 'b', { placement: 'top', push_layout: false })

s = Select(m_array)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(m_array[hash(a)], { resolve_pointers: false })
Clump(InverseSelection(s))

let s2 = Select(U[a], { within: u_array })
Connect(s2, s)

s2 = Select(U[b], { within: u_array })
Connect(s2, s)

s = Select(m_array[hash(a)])
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(...m_array[hash(a)], { within: m_array })
Hide(s)

Label(s[0], 'a')
Label(s[1], 'b')

s = Select(m_array)
Label(s, '0', { placement: 'left', show_braces: false })
Label(s, 'm-1', { placement: 'right', show_braces: false })

s = Select(u_array)
Label(s, '0', { placement: 'left', show_braces: false })
Label(s, 'u-1', { placement: 'right', show_braces: false })

Remove(s)
