function curry(cb) {
    return function sum(...args) {
        const all = [...args]
        if (args.length >= cb.length) {
            return cb(...all)
        }
        return function (...next) {
            return sum(...args, ...next)
        }
    }
}

const sum = (a, b, c) => a + b + c
const fn = curry(sum)
console.log(fn(1, 2, 3)) //6
console.log(fn(1)(2, 3)) //6
console.log(fn(1, 2)(3)) //6