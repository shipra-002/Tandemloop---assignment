let arr = [1,2,8,9,12,46,76,82,15,20,30]
let multiple = [1,2,3,4,5,6,7,8,9]
let result = {}
for (let i of multiple) {
    result[i] = 0
}
for (let item of arr){
    for (let num of multiple){
        if (item%num == 0){
            result[num] += 1
        }
    }
}
console.log(result)