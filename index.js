function getGreeting(name, isMorning) {
    if (isMorning === true) {
        return "good morning " + name
    }
    if (isMorning === false) {
        return "good evening " + name
    }

}
console.log(getGreeting("soma", true))
console.log(getGreeting("sarthak", false))

function calculateTotal(prices) {
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
        sum = sum + prices[i]

    }
    return sum
}

let a = calculateTotal([10, 25, 5, 60])
console.log(a)

let pro = [
    { name: "laptop", price: 800, inStock: true },
    { name: "phone", price: 700, inStock: false },
    { name: "headphone", price: 900, inStock: true },
    { name: "keybord", price: 50, inStock: false }
]
for(let i=0;i<pro.length;i++){
    if(pro[i].inStock ===true){
        console.log(pro[i].name)
    }
}