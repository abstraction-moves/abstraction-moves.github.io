let str = 'egg.scramble(3).with(cheddar)'.split('')

let ast = {
    text: '()',
    loc: 20,
    children: [
        {
            text: '.',
            loc: 15,
            children: [
                {
                    text: '()',
                    loc: 12,
                    children: [
                        {
                            text: '.',
                            loc: 3,
                            children: [
                                { text: 'egg', loc: 0 },
                                { text: 'scramble', loc: 4 },
                            ],
                        },
                        { text: '3', loc: 13 },
                    ],
                },

                { text: 'with', loc: 16 },
            ],
        },
        { text: 'cheddar', loc: 22 },
    ],
}

let search = [ast]
let nodes = []

while (search.length > 0) {
    const current = search.shift()

    if ('children' in current) {
        nodes.push(current)
        search.push(...current.children)
    }
}
