let s = null
Display(tree)

s = Select(tree)
SetVisualForm(s, 'Tree', { trim_leaves: true })

s = Select(A, C, E, D, B)
Fragment(s)

s = SelectNodes(tree)
Clump(s)
LabelIdentifier(s)
Style(s, (d) => {
    if ('color' in d && d.color == 'red') {
        return { background: 'pink' }
    } else if ('color' in d && d.color == 'black') {
        return { background: 'lightgrey' }
    } else {
        return { background: 'khaki' }
    }
})

s = Select(A)
Label(s, 'x', { placement: 'left', push_layout: false, show_braces: false })

s = Select(B)
Label(s, 'c', { placement: 'right', push_layout: false, show_braces: false })

s = Select(D)
Label(s, 'w', { placement: 'right', push_layout: false, show_braces: false })

s = Select(C)
Label(s, 'c`', { placement: 'right', push_layout: false, show_braces: false })

Remove(s)
