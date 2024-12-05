let s = null
let AB = [A, B]
Display(AB)

s = Select(AB)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

SetVisualForm(Select(A, B), 'Sequence', { style: 'Blocks' })

Display(C)
s = Select(C)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(C.slice(0, -1))
Hide(s)

s = Select(B[j])
Label(s, 'j')

s = Select(C[a])
Label(s, 'a', { placement: 'bottom' })

s = Select(C[b])
Label(s, 'b', { placement: 'bottom' })
