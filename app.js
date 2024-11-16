document.addEventListener('DOMContentLoaded',function(){

  let superheroSearchButton=document.getElementById('superheroSearchButton');

  superheroSearchButton.addEventListener('click',function(){
    fetch('superheroes.php', {method: 'POST'})
      .then(response => response.text())
      .then(data => alert(data))        
      .catch(() => alert('An error occurred.')); 
    });
  });

