let s = null

Display(X1)
Display(X2)

s = Select(X1, X2)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...X2, ...X1)
Hide(s)

s = Select(X1[i])
Label(s, 'i', { placement: 'bottom' })

s = Select(...X1)
LabelLocation(s, (i) => `x<sub>${i}</sub>`, { coordinates: X1, range: [0, Var(`n`)] })

s = Select(...X2)
LabelLocation(s, (i) => `x<sub>${i}</sub>`, { coordinates: X2, range: [0, Var(`n`)] })

s = Select(X2.slice(i + 1))
let s2 = Select(X1.slice(i))
Connect(s2, s)

s = Select(X1.slice(i + 2, n - 1))
s2 = Select(X2.slice(i + 3, n))

s = SpanSelection(s)
s2 = SpanSelection(s2)

Abbreviate(s)
Abbreviate(s2)

Remove(s)
Remove(s2)
