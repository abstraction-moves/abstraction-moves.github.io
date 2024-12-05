let physical = [...Array(24)].map((_) =>
    Math.floor(Math.random() * 100)
        .toString()
        .padStart(8, '0')
)

let page = [...Array(8)].map((_) =>
    Math.floor(Math.random() * 100)
        .toString()
        .padStart(8, '0')
)

let msb = [...Array(8)].map((_) =>
    Math.floor(Math.random() * 100)
        .toString()
        .padStart(8, '0')
)

let lsb = [...Array(8)].map((_) =>
    Math.floor(Math.random() * 100)
        .toString()
        .padStart(8, '0')
)
