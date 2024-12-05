function generate_tree(h) {
    if (h == 0) return null

    if (h - 1 == 0) {
        return { value: Math.floor(Math.random() * 10) }
    }

    return {
        value: Math.floor(Math.random() * 10),
        left: generate_tree(h - 1),
        right: generate_tree(h - 1),
    }
}

let tree = {
    value: Math.floor(Math.random() * 10),
    left: generate_tree(2),
    right: {
        value: Math.floor(Math.random() * 10),
        left: null,
        right: generate_tree(2),
    },
}
