// Show variables
let s = null
let flat = machines.map((machine) => machine.map((m) => m.time))
Display(flat)

s = Select(flat)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(...flat)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical', direction: 'Reverse' })

s = Select(...jobs)
Clump(s)
Style(s, { background: 'white' })

s = Select(flat[i])
Label(s, 'i')

s = Select(jobs[j])
Label(s, 'j', { placement: 'inline' })
Style(s, { background: 'bisque' })

s = SpanSelection(Select(...flat.slice(4, -1)))
Abbreviate(s)

s = Select(jobs.slice(0, m - 1))
LabelLocation(s, { placement: 'inline', coordinates: jobs })

s = Select(jobs[m - 1])
Label(s, 'm', { placement: 'inline' })

Remove(s)
