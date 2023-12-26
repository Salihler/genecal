function doSomething() {
    let generalIncome = document.getElementById("generalIncome");
    let goal = document.getElementById("generalIncome");
    
    if (Number(generalIncome.innerHTML) == Number(goal.innerHTML))
    {
        generalIncome.innerHTML = Number(generalIncome.innerHTML) + 1;
    }
    else
    alert("Bitti");
}

window.onload = function () {
    setInterval(doSomething, 1000);
}