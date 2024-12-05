let s = null
Display(Var('M'))

s = Select(M)
SetVisualForm(s, 'Graph', { pointer_graph: true })

s = Select(M)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })
s = SplitSelection(s)
Style(s, { background: '#abe0f9' })

s = Select(...M)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })
Style(s, { background: '#fee4b3' })

Remove(s)
