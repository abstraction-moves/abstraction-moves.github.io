function build_rows(n_rows, labels) {
    const result = []

    for (let i = 0; i < n_rows; i += 1) {
        const row = {}
        labels.forEach((label) => {
            row[label] = i
        })
        result.push(row)
    }

    return result
}
/* CELL BREAK */
dataset = build_rows(
    500,
    [...Array(500).keys()].map((i) => `label_${i + 1}`)
)
/* CELL BREAK */
console.log(dataset)
