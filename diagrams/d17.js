let vls = 4
let n = 4

function get_value(i) {
    return Math.floor(Math.abs(Math.sin(i) * 20))
}

let sdma_vl_map = [
    get_value(0), // List (RCU)
    get_value(1), // mask
    get_value(2), // actual_vls
    vls, // vls
]

// maps
for (let i = 0; i < vls; i++) {
    sdma_vl_map.push(make_map())
}

function make_map() {
    let map = [
        get_value(0), // mask
    ]

    for (let i = 0; i < n; i++) {
        map.push(get_value(i)) // sde[i] --> eng i
    }

    return map
}
