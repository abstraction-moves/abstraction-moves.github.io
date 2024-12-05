let ab = [a_bin, b_bin]
let abd = [ab, d_bin]

let s = null
let s2 = null
Display(abd)

s = Select(abd)
Revisualize(s, 'Sequence', { style: 'Space Separated' })

s = Select(ab)
Revisualize(s, 'Sequence', { style: 'Space Separated' })

s = Select(a_bin, b_bin, d_bin)
Revisualize(s, 'Sequence', { style: 'Space Separated', margin: 0 })

s = Select(a_bin)
s = PartitionSelection(s, n / 2)
Clump(s, { scale: 0.2 })
Label(s, 'a')

s = Select(b_bin)
s = PartitionSelection(s, n / 2)
Clump(s, { scale: 0.2 })
Label(s, 'b')

s = Select(d_bin)
s = PartitionSelection(s, n / 2)
Clump(s, { scale: 0.2 })
Label(s, 'd')

s = Select(ab)
s2 = Select(d_bin)
Connect(s, s2)

Clear(s)
Clear(s2)
