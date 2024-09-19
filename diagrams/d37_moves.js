let s = null
let s2 = null
Display(Var('physical'))

s = Select(physical)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

let layout = [page, msb, lsb]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

SetVisualForm(Select(page, msb, lsb), 'Sequence', { style: 'Blocks' })

s = Select(...physical, ...page, ...msb, ...lsb)
Clump(s)

s = Select(...page)
LabelLocation(s, (s) => `P${7 - s}`, { placement: 'inline' })
Label(SpanSelection(s), 'Page')

s = Select(...msb)
LabelLocation(s, (s) => `A${7 - s}`, { placement: 'inline' })
Label(SpanSelection(s), 'Addr MSB')

s = Select(...lsb)
LabelLocation(s, (s) => `A${7 - s}`, { placement: 'inline' })
Label(SpanSelection(s), 'Addr LSB')

s = Select(...physical)
LabelLocation(s, (s) => `A${23 - s}`)

s = Select(...physical.slice(0, 7))
s2 = Select(...page.slice(0, 7))
Connect(s, s2)

s = Select(...physical.slice(7, 15))
s2 = Select(...msb)
Connect(s, s2)

s = Select(...physical.slice(15, -1))
s2 = Select(...lsb)
Connect(s, s2)

Remove(s2)

s = Select(...page.slice(1, -2), ...physical.slice(1, 6))
s = SpanSelection(s)
Abbreviate(s)

s = Select(...msb.slice(2, -1), ...physical.slice(9, 14))
s = SpanSelection(s)
Abbreviate(s)

s = Select(...lsb.slice(2, -1), ...physical.slice(17, 22))
s = SpanSelection(s)
Abbreviate(s)

s = Select(physical[physical.length - 1])
Label(s, 'not used', { placement: 'right' })
