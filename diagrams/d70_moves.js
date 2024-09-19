let s = null
Display(Var('boolean'))

s = Select(boolean)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = SelectByValue(boolean, (v) => v == null)
Hide(s)
Style(s, {
    background: 'lightgrey',
})

s = SpanSelection(s)
Label(s, 'ignored', { placement: 'left' })

s = Select(boolean[0])
Label(s, 'type tag', { placement: 'left' })

s = Select(boolean[1])
Label(s, 'true', { placement: 'left' })
