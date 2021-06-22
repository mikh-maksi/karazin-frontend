fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits') .
then(response => response.json()) 
.then(
    
    commits => alert(commits[0].author.login)
    );

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits') .
    then(response => response.json()) 
    .then(function(commits){
        console.log(commits)
    }
        
        );



fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5') .
    then(response => response.json()) 
    .then(function(commits){
        console.log(commits);
        console.log(commits[0]);
        console.log(commits[0].ccy);
    }
        
        );