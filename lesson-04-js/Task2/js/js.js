btn.addEventListener("click", f_out);

  function f_out (){
    if (act.value =='+') {
      result.innerHTML = Number(in1.value) +  Number(in2.value)
    }
  
    if (act.value =='-'){
      result.innerHTML =  Number(in1.value) -  Number(in2.value)
    }

    if (act.value =='*'){
      result.innerHTML =  Number(in1.value) *  Number(in2.value)
    }
    if (act.value =='/'){
      result.innerHTML =  Number(in1.value) /  Number(in2.value)
    }
    
  }
