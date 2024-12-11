let s = null
Display(L)

s = Select(L)
Revisualize(s, 'Graph')

s = SelectNodes(L)
Revisualize(s, 'Sequence', { style: 'Blocks' })

s = Select(L.vertices)
LabelLocation(s, { placement: 'top', show_braces: false })
Style(s, { background: '#fee4b3' })

let s2 = null
for (let i = 0; i < L.vertices.length; i++) {
    let n = L.vertices[i].length
    let mid = Math.floor(n / 2 - 1)
    s2 = Select(...L.vertices[i])
    Label(s2[0], 'p', { placement: 'bottom' })
    Label(s2[n - 1], 'r', { placement: 'bottom' })

    if (mid > 0) Label(s2[Math.floor(n / 2) - 1], 'q', { placement: 'bottom' })
}

Clear(s)
Clear(s2)
