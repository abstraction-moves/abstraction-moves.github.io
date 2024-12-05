let layout = [field1_arr, field2_arr, sum_arr, leftover, result_arr]

let s = null
let s2 = null
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

s = Select(...layout)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...[field1_arr, field2_arr, leftover, result_arr])
s = SplitSelection(s)
s = SpanSelection(s)
Clump(s)

Label(s[0], 'field1', { placement: 'bottom' })
Label(s[1], 'field2', { placement: 'bottom' })
Label(s[2], 'carry', { placement: 'left' })
Label(s[3], 'result', { placement: 'bottom' })

s2 = Select(sum_arr[0])
Connect(s2, s[2])

Clump(s2)
Remove(s2)

s = Select(sum_arr.slice(1))
s = SpanSelection(s)
Clump(s)

Remove(s)
