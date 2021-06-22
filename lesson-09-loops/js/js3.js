btn.addEventListener("click",fnc);
function fnc(){
    a1 = a.value;
    b1 = b.value;
    flaga = 0;
    flagb = 0;
    if (!((a1 >= 1) && (a1<=20))){
        flaga=1;
    }
    if (!((b1 >= 1) && (b1<=20))){
     flagb=1;
    }
    if (flaga && !flagb){alert("Число а не лежит в интервале от 1 до 20");}
    if (!flaga && flagb){alert("Число b не лежит в интервале от 1 до 20");}
    if (flaga && flagb){alert("Числа a и b не лежат в интервале от 1 до 20");}
    if (!flaga && !flagb){
        sum = Number(a1) + Number(b1);
        mult = a1 * b1;
        answer.innerHTML="Сумма: "+sum+"<br> Произвдение: "+mult;
    }
}


