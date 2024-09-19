// Note: The prototype does not yet support tracking variable values
// over time, as such, this is done manually. A graph is constructed
// from the merge sort calls.

let L = {
    vertices: [],
    edges: [],
}

merge_sort([12, 3, 7, 9])
// merge_sort([12, 3, 7, 9, 14, 6, 11, 2])

function merge_sort(array, __parent_index) {
    L.vertices.push([...array])

    let __original_index = L.vertices.length - 1
    if (__parent_index != null) L.edges.push([__parent_index, __original_index])

    let mid = array.length

    if (mid === 1) {
        return
    }

    let midpoint = Math.floor(mid / 2)
    let left = array.slice(0, midpoint)
    let right = array.slice(midpoint)

    merge_sort(left, __original_index)
    let __left_index = L.vertices.length - 1

    merge_sort(right, __original_index)
    let __right_index = L.vertices.length - 1

    merge(left, right, array)

    // Uncomment this to also render to the merge calls.
    // L.vertices.push([...array])
    // L.edges.push([__left_index, L.vertices.length - 1])
    // L.edges.push([__right_index, L.vertices.length - 1])
}

function merge(left_array, right_array, array) {
    let index = 0

    while (left_array.length > 0 && right_array.length > 0) {
        if (right_array[0] < left_array[0]) {
            array[index] = right_array.shift()
        } else {
            array[index] = left_array.shift()
        }

        index += 1
    }

    while (left_array.length > 0) {
        array[index++] = left_array.shift()
    }

    while (right_array.length > 0) {
        array[index++] = right_array.shift()
    }

    return array
}
