let array = [0, 34, 778, 45, 10, 94, 3,]

for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            // let temp = array[i]
            // array[i] = array[i + 1]
            // array[i + 1] = temp
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
}