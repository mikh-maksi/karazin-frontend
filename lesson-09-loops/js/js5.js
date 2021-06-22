sum = 0;
i=0;
min = 11;
max = -1;
for(let i = 1;i<=4;i++){
    a = Math.round(Math.random()*10);
    if (a<min) min = a;
    if (a>max) max = a;
    console.log(a);
}
console.log("min: "+min+" max: "+ max);