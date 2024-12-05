let names = ['first.txt', 'first.txt~', 'second.txt', 'second.txt~']
let booleans = names.map((n) => !n.endsWith('~'))
let filtered_names = names.filter((_, i) => booleans[i])
