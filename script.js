function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let year = document.querySelector('#years');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    year = parseFloat(year.value);

    worth = money + (money * (inflationRate/100));

    for(let i = 1; i < year; i++) {
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);
    
    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `$${money} today is worth the same as $${worth} in ${year} years.`
    document.querySelector('.container').appendChild(newElement);

    console.log(worth)
}