let T = {
    value: 0,
    left: generate_tree(3),
}

function generate_tree(h) {
    if (h == 0) return null

    return {
        value: Math.floor(Math.random() * 10),
        left: generate_tree(h - 1),
        right: generate_tree(h - 1),
    }
}
