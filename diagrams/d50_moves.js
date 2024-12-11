let s = null
let s2 = null
let layout = [names, booleans, filtered_names]
Display(layout)

s = Select(layout)
Revisualize(s, 'Sequence', { style: 'Space Separated', margin: 80 })

Revisualize(Select(names, booleans, filtered_names), 'Sequence', {
    style: 'Space Separated',
    orientation: 'Vertical',
})

s = Select(...names)
s2 = Select(...booleans)
Connect(s, s2)

s = SelectByCondition(booleans, (v) => v == true)
s2 = Select(...filtered_names)

Connect(s, s2)

Clear(s)
Clear(s2)
