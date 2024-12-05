let s = null

Display(B)
Display(A)

s = Select(A, B)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 10 })

for (let i = 0; i < indices.length; i++) {
    let ai = indices[i][0]
    let bi = indices[i][1]

    Connect(Select(B[bi]), Select(A[ai]))
}

s = Select(...A)
Style(s, {
    borderBottom: '1px solid black',
})
