let cars = [28000, 5000, 11000, 12000, 16000, 8000, 7000, 22000, 45000, 80000, 55000, 20000]
let hello = alert('Добро пожаловать в GM Motors')
cars.sort((a, b) => a - b)
let from = prompt('От какой суммывам подобрать машину?') // 5000
let even = cars.filter(item => item >= 5000)

console.log(even)
if (from >= 5000) {

} else {
    alert("У нас нет такой дешововой машины")
}

let upto = prompt('До какой суммы подобрать вам машину ?') // 20000 
let choiceMoney = cars.filter(item => item <= 20000)
console.log(choiceMoney);
if (upto >= 5000 && upto <= 20000) {
    alert(choiceMoney)

    let isSelected = confirm('выбрали машину?')
    if (isSelected) {


        let choice = +prompt('Какую машину выбрали ')
        let indx = cars.indexOf(choice)
        if (indx === -1) {
            alert("Нет такой машины")
        } else {
            cars.splice(indx, 1)
            alert(cars)
        }




    } else {
        alert('Досвидание')
    }

}
else {
    alert("Вы не выбрали машину")
}


