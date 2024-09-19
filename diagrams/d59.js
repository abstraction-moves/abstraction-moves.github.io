let padding_size = 2
let memory = [...get_memory_of_length(padding_size), ...get_memory_of_length(6), ...get_memory_of_length(padding_size)]

let openUpvalues = {
    next: null,
    location: padding_size + 4,
}

openUpvalues.next = {
    next: null,
    location: padding_size + 2,
}

openUpvalues.next.next = {
    next: null,
    location: padding_size,
}

function get_memory_of_length(n) {
    return [...Array(n)].map((_) => Math.floor(10 * Math.random()))
}
