let L = [1, 2, 5, 10, 3, 7, 11, 15, 17, 20, 9, 15, 8, 16]

function make_tree(lst, i) {
    if (i * 2 + 1 >= lst.length) {
        return { value: lst[i] }
    }

    return {
        value: lst[i],
        left: make_tree(lst, i * 2 + 1),
        right: make_tree(lst, i * 2 + 2),
    }
}

let tree = make_tree(L, 0)
