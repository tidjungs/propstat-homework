const combi = (n, r) => fact(n)/fact(n-r)/fact(r)

const fact = (n) => n == 1 || n == 0 ? 1 : n * fact(n-1)

const binomial = (x ,n, p) => combi(n ,x)*Math.pow(p, x)*Math.pow(1 - p, n - x)

console.log(binomial(2, 10, 0.08).toFixed(3))



