let s = null
Display(L)

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(...L)
s = SpanSelection(s)

s = PartitionSelection(s, L.length / page_size)
Clump(s)
LabelLocation(s, { text: (s) => `system page ${s}` })

Label(s[0], 'a', { placement: 'right' })
Label(s[0], 'c', { placement: 'right' })

Label(s[1], 'b', { placement: 'right' })
Label(s[2], 'a', { placement: 'right' })

Label(s[3], 'b', { placement: 'right' })
Label(s[4], 'a', { placement: 'right' })

s = Select(L.slice(page_size, page_size + page_size * 2))
s = SpanSelection(s)
Label(s, 'd', { placement: 'right' })

s = Select(L.slice(page_size + page_size * 2, page_size + page_size * 4))
s = SpanSelection(s)
Label(s, 'd', { placement: 'right' })

s = Select(L.slice(0, page_size + page_size * 4))
Fragment(s)
