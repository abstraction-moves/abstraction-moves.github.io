let s = null

let layout = [A, B]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(A, B)
SetVisualForm(s, 'Grid', { style: 'Bordered' })

s = Select(
    A.slice(0, 2).map((r) => r.slice(0, 2)),
    B.slice(0, 2).map((r) => r.slice(0, 2))
)
s = SpanSelection(s)
Clump(s)
Label(s[0], 'A11', { placement: 'inline' })
Label(s[1], 'B11', { placement: 'inline' })

s = Select(
    A.slice(2, 4).map((r) => r.slice(0, 2)),
    B.slice(2, 4).map((r) => r.slice(0, 2))
)
s = SpanSelection(s)
Clump(s)
Label(s[0], 'A21', { placement: 'inline', push_layout: false })
Label(s[1], 'B21', { placement: 'inline', push_layout: false })

s = Select(
    A.slice(2, 4).map((r) => r.slice(2, 4)),
    B.slice(2, 4).map((r) => r.slice(2, 4))
)
s = SpanSelection(s)
Clump(s)
Label(s[0], 'A12', { placement: 'inline', push_layout: false })
Label(s[1], 'B12', { placement: 'inline', push_layout: false })

s = Select(
    A.slice(0, 2).map((r) => r.slice(2, 4)),
    B.slice(0, 2).map((r) => r.slice(2, 4))
)
s = SpanSelection(s)
Clump(s)
Label(s[0], 'A22', { placement: 'inline', push_layout: false })
Label(s[1], 'B22', { placement: 'inline', push_layout: false })
