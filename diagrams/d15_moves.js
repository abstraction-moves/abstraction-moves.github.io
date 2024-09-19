let AB = [A, B]
let mergedAB = [merged, AB]

let s = null
let s2 = null
Display(mergedAB)

s = Select(mergedAB)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 100 })

s = Select(AB)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical', alignment: 'Start' })

s = Select(A, B, merged)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = SpanSelection(Select(...A.slice(0, i)))
Clump(s)
Clump(InverseSelection(s))
Style(s, { background: 'bisque' })
Label(s, 'ai', { placement: 'right', push_layout: false, show_braces: false })

s = SpanSelection(Select(...B.slice(0, j)))
Clump(s)
Clump(InverseSelection(s))
Style(s, { background: 'bisque' })
Label(s, 'bi', { placement: 'right', push_layout: false, show_braces: false })

s = SpanSelection(Select(...merged))
Clump(s)
Label(s, 'Merged Result')

s2 = Select(A)
Connect(s2, s)
Label(s2, 'A', { placement: 'right', show_braces: false })

s2 = Select(B)
Connect(s2, s)
Label(s2, 'B', { placement: 'right', show_braces: false })

Remove(s)
Remove(s2)
