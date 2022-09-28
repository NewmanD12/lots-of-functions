
console.log('Challenge 1:')
function sayHi(name){
    return `Hi, ${name}`
}

console.log(sayHi('Dakota'))


console.log('\n')
console.log('challenge 2:')
function bigString(str1, str2){
    if(str1.length === str2.length){
        return `${str1} and ${str2} are the same length`
    }   else if(str2.length > str1.length){
        return str2
    }   else if(str1.length > str2.length){
        return str1
    }
}

console.log(bigString('bigstring', 'string'))
console.log(bigString('little', 'gigantic'))
console.log(bigString('four', 'fore'))

console.log('\n')
console.log('Challenge 3:')
function bigNumber(num1, num2){
    if (num1 > num2){
        return num1
    }   else if (num2 > num1){
        return num2
    }   else{
        return `${num1} and ${num2} are equal`
    }
}

console.log(bigNumber(96, 32))
console.log(bigNumber(10, 20))
console.log(bigNumber(7, 7))


console.log('\n')
console.log('Challenge 4:')
function fiveMore(arr1){
    res = []
    for (let x of arr1){
        if (x % 2 === 1){
            x += 5
            res.push(x)
        } else {
            res.push(x)
        }
    }
    return res
}


console.log(fiveMore([1, 2, 3, 4, 5, 6, 7, 8, 9]))


console.log('\n')
console.log('Challenge 5:')
function arraySummer(arr1){
    sum = 0
    for (let x of arr1){
        sum += x
    }
    return sum
}

console.log(arraySummer([5,10,15,20,25,30]))


console.log('\n')
console.log('Challenge 6:')
function everyDivisble(num){
    multiples = [num]
    if(num > 10 || num <= 0){
        return `error: number must be between 1 and 10`
    } else {
        while(multiples[multiples.length - 1] + num < 100){
            multiples.push(multiples[multiples.length - 1] + num)
        }
    }
    for(let x of multiples){
        console.log(x)
    }
    return multiples
}

console.log(everyDivisble(7))