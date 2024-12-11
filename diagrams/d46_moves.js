let s = null
Display(Var('word_1'))

s = Select(word_1)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...word_1)
s = SpanSelection(s)
s = PartitionSelection(s, word_1.length / 8)
Clump(s, { scale: 0.5 })

LabelLength(s[0], { placement: 'top', show_braces: false })
Label(s[0], 'Source Host')

LabelLength(s[1], { placement: 'top', show_braces: false })
Label(s[1], 'Byte Size')

Label(s[2], 'N')

Label(s[3], 'Format')

let format = word_1.slice(8 * 3)
Display(Var('format'))

let s2 = Select(format)
SetVisualForm(s2, 'Sequence', { style: 'Blocks' })
Remove(s2)

Connect(s[3], Select(format))

s = Select(format.slice(0, 2), { within: Var('format') })
Clump(SpanSelection(s))

s = Select(format.slice(2, 4), { within: Var('format') })
Clump(SpanSelection(s))

s = Select(format.slice(4), { within: Var('format') })
Hide(s)

s = Select(format[4], { within: Var('format') })
Label(s, 'C')

s = Select(format[5], { within: Var('format') })
Label(s, 'R')

s = Select(format[6], { within: Var('format') })
Label(s, 'B')

s = Select(format[7], { within: Var('format') })
Label(s, 'M')

Remove(s)
