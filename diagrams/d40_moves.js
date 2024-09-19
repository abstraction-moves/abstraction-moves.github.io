let s = null
Display(M)

s = Select(M)
SetVisualForm(s, 'Graph', { pointer_graph: true })

SetVisualForm(Select(M), 'Sequence', { style: 'Blocks', orientation: 'Vertical' })
SetVisualForm(Select(...M), 'Sequence', { style: 'Blocks' })

s = Select(M[n], { resolve_pointers: false })
Label(s, 'IP', { placement: 'left' })

s = InverseSelection(s)
Clump(s)

s = Select(...args)

Label(s[1], 'arg1', { placement: 'top' })
Label(s[2], 'arg0', { placement: 'top' })
Label(s[3], 'op', { placement: 'top' })

Clump(s[0])
Style(s[0], {
    background: 'lightgrey',
})

s = Select(M)
Label(s, 'memory', { placement: 'top', show_braces: false })

// s = SpanSelection(s)
// let s2 = Select(M[n], { within: Var('M') })
// Connect(s2, s)
Remove(s)
