let s = null
Display(Var('M'))

s = Select(M)
Revisualize(s, 'Graph', { pointer_graph: true })

s = Select(M)
Revisualize(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })
s = Select(...M, { resolve_pointers: false })
Style(s, { background: '#abe0f9' })

s = Select(...M)
Revisualize(s, 'Sequence', { style: 'Blocks' })
Style(s, { background: '#fee4b3' })

Clear(s)
