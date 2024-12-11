let s = null
Display(truncated_record)

s = Select(truncated_record)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = SpanSelection(Select(truncated_record.slice(0, 11)))
Clump(s, { scale: 0.2 })
Label(s, '11', { placement: 'inline' })

s = SpanSelection(Select(truncated_record.slice(11, 17)))
Clump(s, { scale: 0.2 })
Label(s, 'Devid(6)', { placement: 'inline' })

s = SpanSelection(Select(truncated_record.slice(17)))
s = PartitionSelection(s, n + 1)
Clump(s, { scale: 0.2 })

Label(s[0], 'n(8)', { placement: 'inline' })
Label(s.slice(1), 'Text(6)', { placement: 'inline' })

Abbreviate(SpanSelection(s.slice(2, -1)))
s = SpanSelection(s.slice(1))

Label(s, 'n text bytes', { push_layout: false })

Remove(s)
