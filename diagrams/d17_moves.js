let s = null
Display(sdma_vl_map)

s = Select(sdma_vl_map)
SetVisualForm(s, 'Graph', { pointer_graph: true, vertical_spacing: 80 })

s = Select(sdma_vl_map)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(...sdma_vl_map.slice(4))
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(...sdma_vl_map.slice(6, -1), { resolve_pointers: false })
Abbreviate(s)

for (let i = 0; i < vls; i++) {
    s = Select(sdma_vl_map[4 + i].slice(3, -1))
    Abbreviate(s)
}

s = Select(...sdma_vl_map, { resolve_pointers: false })
Hide(s)

Label(s[0], 'list (RCU)')
Label(s[1], 'mask')
Label(s[2], 'actual_vls (max 8)')
Label(s[3], 'vls (max 8)')

s = Select(...sdma_vl_map.slice(4, -1), { resolve_pointers: false })
LabelLocation(s, (l) => 'map[' + (l - 4) + ']', { placement: 'inline', coordinates: sdma_vl_map })

s = Select(sdma_vl_map[sdma_vl_map.length - 1], { resolve_pointers: false })
Label(s, 'map[vls-1]', { placement: 'inline' })

for (let i = 0; i < vls; i++) {
    let map = sdma_vl_map[4 + i]

    s = Select(...map)
    Hide(s)

    Label(s[0], 'mask')

    s = Select(map.slice(1, -1))
    LabelLocation(s, (l) => 'sde[' + (l - 1) + ']' + ' → ' + 'eng ' + (l - 1), {
        placement: 'inline',
        coordinates: map,
    })

    s = Select(map[map.length - 1])

    Label(s, 'sde[n-1] → eng n')
}
