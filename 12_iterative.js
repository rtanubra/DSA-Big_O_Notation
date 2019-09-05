const sheepCount= (number)=>{
    var tick =0
    for (i=number; i>=0;i--){
        if (i===0){
            console.log('All sheep jumped over the fence')
        }
        else{
            console.log(`${i}: Another sheep jumps over the fence`)
        }
        console.log(tick)
        tick++
    }
}
/**
 * Linear time complexity O(n)
 */
// sheepCount(3)
// sheepCount(5)

const powerCalculator=(base,exp)=>{
    var product = 1
    var tick = 0
    for (i=exp;i>0;i--){
        product = product*base
        tick++
    }
    console.log(tick)
    return product
}
/**
 * Linear time complexity based on exponent
 */
// console.log(powerCalculator(10,3))
// console.log(powerCalculator(10,8))

const reverseString= (string)=>{
    var newStr = ""
    var tick = 0 
    for (i=string.length-1;i>=0;i--){
        newStr = newStr+string[i]
        tick ++
    }
    console.log("duration",tick)
    return newStr
}
/**
 * Linear time complexity based on length of the word 
 */
// console.log('reverseString',"******************************")
// console.log(reverseString('12'))
// console.log(reverseString('123456'))

const triangleNumber=(number)=>{
    var tick = 0 
    var sum =0
    for (i=1;i<=number;i++){
        sum = sum+ i
        tick++
    }
    console.log("duration",tick)
    return sum
}
/**
 * Linear time iterate through numbers from 1 to n
 */
// console.log('triangleNumber',"******************************")
// console.log(triangleNumber(3))
// console.log(triangleNumber(30))
// console.log(triangleNumber(300))

const stringSplitter = (word,sep)=>{

}

const fib=(n)=>{

}

const factorial =(n)=>{
    
}