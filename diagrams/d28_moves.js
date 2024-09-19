let s = null
let combined = [M, D, R]
Display(combined)

s = Select(combined)
SetVisualForm(s, 'Grid', { padding: [0, 0] })

s = Select(M)
LabelLocation(s, { placement: 'top', show_braces: false })

s = SelectByValue(combined, (v) => v == 0)
Hide(s)

s = SelectByValue(combined, (v) => v == 2)
Hide(s)
Label(s, 'm')

s = SelectByValue(combined, (v) => v == 4)
Hide(s)
Label(s, 'd')

s = SelectByValue(R, (v) => v == 0)
Hide(s)
Label(s, 'n')

Remove(s)
