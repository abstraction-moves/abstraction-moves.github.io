class Packet {
    constructor(val) {
        this.val = val ?? Math.floor(Math.random() * 10)
    }
}

let y = new Packet()
let x = new Packet()
let p = new Packet()
let q = new Packet()

let input = [q, p, x]
let other = [y]

let output = [new Packet(), new Packet()]
