btn.addEventListener("click", f_out);

  function f_out (){
      q = Number(b.value) +Number(a.value)*Number(p.value);
      result.innerHTML ="Q ="+q;
      e = Number(a.value) * Number(p.value) / q;
      res_el.innerHTML = "E="+e; 
    
  }
