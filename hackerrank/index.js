function oddNumbers(l, r) {
    const odds = []
    if (l === r) return [l]
    if (l % 2 === 1) odds.push(l)
    
    while(l < r) {
        const isImpar = l % 2 === 1
        if (l === 1) odds.push(1)
        if (isImpar) {
            l += 2
        } else {
            l += 1
        }
        if (l < r) odds.push(l)
    }

    if (r % 2 === 1) odds.push(r)
    
    return odds
}

console.log(oddNumbers(21,21))