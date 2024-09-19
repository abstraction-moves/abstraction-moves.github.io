// "Radix Sort" by Lior Elrom
// https://stackoverflow.com/a/52236574/26618555

let digits = [329, 457, 657, 839]
let states = [digits]

function radixSort(arr) {
    const base = 10
    let divider = 1
    let maxVal = Number.NEGATIVE_INFINITY

    while (divider === 1 || divider <= maxVal) {
        const buckets = [...Array(10)].map(() => [])

        for (let val of arr) {
            buckets[Math.floor((val / divider) % base)].push(val)
            maxVal = val > maxVal ? val : maxVal
        }

        arr = [].concat(...buckets)
        divider *= base

        states.push([...arr])
    }

    return arr
}

function separateDigits(num) {
    const numAsString = num + ''
    const strings = numAsString.split('')
    return strings.map((s) => Number(s))
}

radixSort(digits)
