let h = 3

function generate_tree(h) {
    if (h == 0) return null

    return {
        value: Math.floor(Math.random() * 10),
        left: generate_tree(h - 1),
        right: generate_tree(h - 1),
    }
}

let left_tree = generate_tree(h)
let right_tree = generate_tree(h)
let list = [...Array(Math.pow(2, h))].map((v) => Math.floor(Math.random() * 10))
