let s = null

let left_layout = [left_flat_head, left_flat]
let right_layout = [right_flat_head, right_flat]

Display(left_layout)
Display(right_layout)

s = Select(left_layout, right_layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(left_flat, right_flat)
SetVisualForm(s, 'Sequence', { style: 'Comma Separated' })

s = Select(left_flat_head, right_flat_head)
Clump(s)

Label(s[0], '@left')
Label(s[1], '@right')

s = Select(left_flat.slice(1), right_flat.slice(1))
s = SpanSelection(s)
Abbreviate(s)

s = Select(left_flat[0], right_flat[0])
Clump(s)
Label(s[0], 'node 1')
Label(s[1], 'node 2')

Remove(s)
