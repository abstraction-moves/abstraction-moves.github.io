let mem_start = 2
let mem_size = 4

let reg_start = 12
let reg_size = 4

let virtual_address = [
    ...get_memory_of_length(mem_start),
    ...get_memory_of_length(mem_size),
    ...get_memory_of_length(reg_start - mem_start - mem_size),
    ...get_memory_of_length(reg_size),
    ...get_memory_of_length(5),
]

let physical_address = [
    ...get_memory_of_length(mem_size),
    ...get_memory_of_length(reg_size),
    ...get_memory_of_length(5),
]

function get_memory_of_length(n) {
    return [...Array(n)].map((_) => Math.floor(10 * Math.random()))
}
