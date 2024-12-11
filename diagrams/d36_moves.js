let s = null
Display(A)

s = Select(A)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(A.slice(0, 8))
s = SpanSelection(s)
Clump(s, { scale: 0.5 })
Label(s, 'Op Code')
LabelLength(s, { placement: 'top' })
LabelLocation(s, { placement: 'bottom', coordinates: A, push_layout: false })

s = Select(A.slice(8, 16))
s = SpanSelection(s)
Clump(s, { scale: 0.5 })
Label(s, '0')
LabelLength(s, { placement: 'top' })
LabelLocation(s, { placement: 'bottom', coordinates: A, push_layout: false })

s = Select(A.slice(16, 32))
s = SpanSelection(s)
Clump(s, { scale: 0.5 })
Label(s, 'X coord')
LabelLength(s, { placement: 'top' })
LabelLocation(s, { placement: 'bottom', coordinates: A, push_layout: false })

s = Select(A.slice(32, 48))
s = SpanSelection(s)
Clump(s, { scale: 0.5 })
Label(s, 'Y coord')
LabelLength(s, { placement: 'top' })
LabelLocation(s, { placement: 'bottom', coordinates: A, push_layout: false })
