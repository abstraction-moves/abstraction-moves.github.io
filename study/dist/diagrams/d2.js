let m = 6 // Number of machines
let n = 9 // Number of jobs

let machines = [...Array(m)].map((_) => [])
let jobs = [...Array(n)].map((_, i) => ({ time: i + 1 }))

for (let k = 0; k < jobs.length; k++) {
    machines[k % machines.length].push(jobs[k])
}

let i = 2
let j = m + i
