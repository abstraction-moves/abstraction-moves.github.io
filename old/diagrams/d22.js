let nodes = 'ALGORITHM'.split('').map((l) => l)

let T = {
    value: nodes[0],
    right: {
        value: nodes[1],
        left: {
            value: nodes[2],
            right: {
                value: nodes[5],
                left: {
                    value: nodes[7],
                },
            },
        },
        right: {
            value: nodes[3],
            left: {
                value: nodes[8],
            },
            right: {
                value: nodes[4],
                right: {
                    value: nodes[6],
                },
            },
        },
    },
}
