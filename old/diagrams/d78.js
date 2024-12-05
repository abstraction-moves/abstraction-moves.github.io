let A = 'https://127.0.0.1/'
let B = 'https://foo.com/'
let C = 'https://bar.com/'
let D = 'https://next.com/'

let T = {
    value: A,
    children: [{ value: B }, { value: C, children: [{ value: A }, { value: A, children: [{ value: A }] }] }],
}
