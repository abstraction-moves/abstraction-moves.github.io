let s = null
let s2 = null
let layout = [physical_address, virtual_address]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(physical_address, virtual_address)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(physical_address.slice(0, mem_size))
s2 = Select(virtual_address.slice(mem_start, mem_start + mem_size))
Connect(s, s2)

s = Select(physical_address.slice(mem_size, mem_size + reg_size))
s2 = Select(virtual_address.slice(reg_start, reg_start + reg_size))
Connect(s, s2)

// Physical address space
s = Select(physical_address.slice(0, mem_size))
s = SpanSelection(s)
Clump(s)
Label(s, 'MEM')
Label(s, '0', { placement: 'left', align: 'start', show_braces: false })

s = Select(physical_address.slice(mem_size, mem_size + reg_size))
s = SpanSelection(s)
Clump(s)
Label(s, 'REG')
Label(s, 'mem.size', { placement: 'left', align: 'start', show_braces: false })

s = Select(physical_address.slice(mem_size + reg_size, -1))
s = SpanSelection(s)
Clump(s)
Label(s, 'MEM2', { push_layout: false, placement: 'inline' })
Label(s, 'mem.size\n+\nreg.size', { placement: 'left', align: 'start', show_braces: false })

s = Select(physical_address.slice(0, -1))
Fragment(s)

s = Select(virtual_address.slice(mem_start, -1))
Fragment(s)

s = Select(virtual_address.slice(mem_start, mem_start + mem_size))
s = SpanSelection(s)
Clump(s)
Label(s, 'mem.start', { placement: 'right', align: 'start', show_braces: false })

s = Select(virtual_address.slice(mem_start + mem_size, reg_start))
s = SpanSelection(s)
Clump(s)
Label(s, 'mem.start + mem.size', { placement: 'right', align: 'start', show_braces: false })

s = Select(virtual_address.slice(reg_start, reg_start + reg_size))
s = SpanSelection(s)
Clump(s)
Label(s, 'reg.start', { placement: 'right', align: 'start', show_braces: false })

s = Select(virtual_address.slice(reg_start + reg_size, -1))
s = SpanSelection(s)
Clump(s)
Label(s, 'reg.start + reg.size', { placement: 'right', align: 'start', show_braces: false })

s = Select(...physical_address.slice(0, mem_size))
