let s = null
Display(S3)

s = Select(S3)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...S3)
Clump(s)

LabelLocation(s, { placement: 'top', show_braces: false })

s = SelectByCondition(S3, (v) => v != null)
Label(s, 'x')

s = Select(S3[N])
LabelLocation(s, 'N', { placement: 'bottom', push_layout: false })

s = Select(S3[A])
LabelLocation(s, 'A', { placement: 'bottom', push_layout: false })
