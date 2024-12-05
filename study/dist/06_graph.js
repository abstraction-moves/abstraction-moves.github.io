const head = { first: null }
head.first = { value: 4, next: null, pprev: head }
head.first.next = { value: 1, next: null, pprev: head.first }
head.first.next.next = { value: 6, next: null, pprev: head.first.next }
