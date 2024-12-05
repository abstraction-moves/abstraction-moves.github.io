let s = null
Display(A)

s = Select(A)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(A.slice(0, n))
s = SpanSelection(s)
Label(s, 'OP')
LabelLength(s, { placement: 'top' })

s = Select(A.slice(n, n + n))
s = SpanSelection(s)
Clump(s)
Label(s, '0 = binary operator\n1 = unary operator\n2 = special operator', {
    placement: 'bottom',
    push_layout: false,
    show_braces: false,
    align: 'left',
})
LabelLength(s, { placement: 'top' })

s = Select(A.slice(n + n))
s = SpanSelection(s)
Clump(s)
Style(s, { background: 'bisque' })
LabelLength(s, { placement: 'top' })

Remove(s)
