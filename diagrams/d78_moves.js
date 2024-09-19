let s = null
Display(T)

s = Select(T)
SetVisualForm(s, 'Tree', { indented: true, vertical_spacing: 0, show_labels: false })

s = SelectNodes(T)
Clump(s)

Label(s[0], 'Site A (D pending)')
Label(s[0], 'Proxies for B C', { placement: 'right' })

Label(s[1], 'Site B')
Label(s[1], 'Proxies for A C', { placement: 'right' })

Label(s[2], 'Site C')
Label(s[2], 'Proxies for B A', { placement: 'right' })

Label(s[3], 'Site A')
Label(s[3], 'Proxies for B', { placement: 'right' })

Label(s[4], 'Site A')
Label(s[4], 'Proxies for B', { placement: 'right' })

Label(s[5], 'Site A')
Label(s[5], 'Proxies for B', { placement: 'right' })
