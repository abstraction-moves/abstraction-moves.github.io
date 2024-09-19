let s = null
Display(T)

s = Select(T)
SetVisualForm(s, 'Grid')

s = Select(T[0])
LabelLocation(s, { placement: 'top', show_braces: false })
Label(SpanSelection(s), 'col', { placement: 'top' })

let c1 = [T[0][0], T[1][0], T[2][0], T[3][0]]
s = Select(c1)

LabelLocation(s, { placement: 'left', coordinates: c1, show_braces: false })
Label(SpanSelection(s), 'row', { placement: 'left', coordinates: c1 })

s = SplitSelection(Select(T))
Hide(s)

let labels = [
    'scale_x',
    'skew_xy',
    'skew_xz',
    'trans_x',
    'skew_yx',
    'scale_y',
    'skew_yz',
    'trans_y',
    'skew_zx',
    'skew_zy',
    'scale_z',
    'trans_z',
    'persp_x',
    'persp_y',
    'persp_z',
    'persp_w',
]

for (let i = 0; i < n * m; i++) {
    Label(s[i], labels[i], { placement: 'inline' })
}

Remove(s)
