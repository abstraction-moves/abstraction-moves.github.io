let grid = []

for (let i = 0; i < h; i++) {
    grid.push(L.slice(i * w, (i + 1) * w))
}

let s = null
Display(grid)

s = Select(grid)
SetVisualForm(s, 'Grid', { style: 'Bordered' })

s = Select(grid[0], grid[1])
s = SpanSelection(s)
Clump(s)
LabelLength(s, { placement: 'top' })
Label(s, 'LEADER')

s = Select(grid[2])
s = SpanSelection(s)
Clump(s)
Label(s, 'BYTE COUNT')

s = Select(grid[3].slice(0, w / 2))
s = SpanSelection(s)
Clump(s)
Label(s, 'BYTE SIZE', { placement: 'left', push_layout: false })

s = Select(grid[3].slice(w / 2))
s = SpanSelection(s)
Clump(s)

s = Select(grid[4].slice(0, w / 2))
s = SpanSelection(s)
Clump(s)
Label(s, 'Beginning of first data byte', { placement: 'right', push_layout: false })

s = Select(grid[4].slice(w / 2))
s = SpanSelection(s)
Clump(s)

s = Select(grid.slice(0, 5))
Fragment(s)
