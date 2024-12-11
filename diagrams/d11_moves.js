let S1 = A.filter((a) => a < x)
let S2 = A.filter((a) => a == x)
let S3 = A.filter((a) => a > x)

let S = [...S1, ...S2, ...S3]
let S_copies = [[...S], [...S], [...S]]

let s = null
Display(S_copies)

s = Select(S_copies)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

s = SpanSelection(Select(S))
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = SpanSelection(Select(S1))
Clump(s)

s = SpanSelection(Select(S2))
Clump(s)

s = SpanSelection(Select(S3))
Clump(s)

// First copy
s = SpanSelection(Select(S1, { within: S_copies[0] }))
Style(s, { background: '#f0b6b9' })
Label(s, 'S1', { placement: 'inline' })

Label(s, '&lt;x', { placement: 'top' })
s = SpanSelection(Select(S2, { within: S_copies[0] }))
Label(s, '=x', { placement: 'top' })

s = SpanSelection(Select(S3, { within: S_copies[0] }))
Label(s, '>x', { placement: 'top' })

// Second copy
s = SpanSelection(Select(S2, { within: S_copies[1] }))
Style(s, { background: '#b5edb4' })
Label(s, 'S2', { placement: 'inline' })

// Third copy
s = SpanSelection(Select(S3, { within: S_copies[2] }))
Style(s, { background: '#bdbaff' })
Label(s, 'S3', { placement: 'inline' })

Remove(s)
