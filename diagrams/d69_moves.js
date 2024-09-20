let s = null
let layout = [b1, b2, b_result]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

SetVisualForm(Select(b1, b2, b_result), 'Sequence', { style: 'Blocks' })

s = Select(b1)
Label(s, n1 + '', { placement: 'left', show_braces: false, push_layout: false })

s = Select(b2)
Label(s, n2 + '', { placement: 'left', show_braces: false, push_layout: false })

s = Select(b_result)
Label(s, result + '', { placement: 'left', show_braces: false, push_layout: false })

s = SelectByCondition([b1, b2, b_result], (v) => v == 1)
Style(s, {
    background: 'black',
    color: 'white',
    borderLeft: '1px solid white',
})

s = Select(b1[2])
let s2 = Select(b_result[2])
Connect(s, s2)

s = Select(b1[5])
s2 = Select(b_result[5])
Connect(s, s2)

s = Select(b1[7])
s2 = Select(b_result[7])
Connect(s, s2)

Remove(s)
