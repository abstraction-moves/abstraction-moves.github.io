let s = null
Display(Var('A'))

s = Select(A)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = SelectByCondition(A, (v) => v == 1)
Style(s, {
    background: 'black',
    color: 'white',
    borderLeft: '1px solid white',
})

s = Select(A.slice(16, -5))
s = SpanSelection(s)
Abbreviate(s)

s = Select(A.slice(0, 3), A.slice(9, 13), A.slice(n - 1))
LabelLocation(s, (l) => n - l + '', { push_layout: false, show_braces: false })

s = Select(A.slice(n - 2))
s = SpanSelection(s)
Label(s, 'TAG_NIL', { placement: 'top' })
