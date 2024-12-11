let s = null
let layout = [b1, b2, b_result]
Display(layout)

s = Select(layout)
Revisualize(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

Revisualize(Select(b1, b2, b_result), 'Sequence', { style: 'Blocks' })

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

let s2 = null

for (let i = 0; i < b_result.length; i++) {
    if (b_result[i] == 1) {
        s = Select(b1[i])
        s2 = Select(b_result[i])
        Connect(s, s2)
    }
}

Clear(s)
