const A = { ...generate_tree(2), color: 'black' }
const C = generate_tree(2)
const E = { ...generate_tree(2), color: 'red' }

const D = { value: get_value(), left: C, right: E, color: 'black' }
const B = { value: get_value(), left: A, right: D }

const tree = { value: get_value(), right: B }

function generate_tree(h) {
    if (h == 0) return null

    if (h - 1 == 0) {
        return { value: get_value() }
    }

    return {
        value: get_value(),
        left: generate_tree(h - 1),
        right: generate_tree(h - 1),
    }
}

function get_value() {
    return Math.floor(Math.random() * 10)
}
