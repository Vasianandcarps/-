let n = prompt("Введите число");
if (!isNaN(n)){
    function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
    alert( factorial(n) );}
else {alert("Укажите число")}