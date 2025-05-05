Display(L)

let s = Select(L)
Revisualize(s, 'Sequence', {
  style: 'Blocks'
})

s = PartitionSelection(s, 3)
Clump(s)

LabelLocation(s, {
  coordinates: L,
  range: [0, Var('n')],
  remap_range: true
})

for (let i=0; i<s.length-1; i++) {
  Connect(s[i], s[i+1])
}