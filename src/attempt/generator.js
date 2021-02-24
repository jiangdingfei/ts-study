function* nTimes(n) {
    if (n > 0) {
        yield n-1
        yield* nTimes(n-1)
    }
}
// nTimes(3)
// for(const x of nTimes(3)) {
//     console.log(x,'nTimes')
// }