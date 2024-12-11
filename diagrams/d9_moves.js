let s = null
Display(tokens)

s = Select(tokens)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', padding: [10, 5], quote_on_string: false })

s = Select(...tokens)
Style(s, { border: '1px solid grey', borderRadius: '4px' })
Remove(s)
