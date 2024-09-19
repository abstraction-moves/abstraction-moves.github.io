let s = null
Display(L, { visual: 'Blocks' })

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = SpanSelection(Select(L.slice(0, 4)))
Clump(s)
Label(s, 'FLAGS')
LabelLocation(s, { coordinates: L, placement: 'top', show_braces: false })

s = SpanSelection(Select(L.slice(4, 8)))
Clump(s)
Label(s, 'TYPE')
LabelLocation(s, { coordinates: L, placement: 'top', show_braces: false })

s = SpanSelection(Select(L.slice(8, 10)))
Clump(s)
Label(s, 'H')
LabelLocation(s, { coordinates: L, placement: 'top', show_braces: false })

s = SpanSelection(Select(L.slice(10, 15)))
Clump(s)
Label(s, 'SITE')
LabelLocation(s, { coordinates: L, placement: 'top', show_braces: false })

s = SpanSelection(Select(L.slice(24)))
Clump(s)
Style(s, {
    style: 'grey',
})
LabelLocation(s, { coordinates: L, placement: 'top', show_braces: false })

s = SpanSelection(Select(L.slice(15, 24)))
Label(s, 'LINK#', { coordinates: L, placement: 'top', show_braces: false })
