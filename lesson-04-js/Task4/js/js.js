btn.addEventListener("click", f_out);

  function f_out (){
      det = Number(a11.value) * Number(a22.value) - Number(a12.value)*Number(a21.value);
      result.innerHTML ="Определитель матрицы равен  ="+det;
    
  }
