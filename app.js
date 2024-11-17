document.addEventListener('DOMContentLoaded',function(){

  const superheroSearchButton=document.getElementById('superheroSearchButton');
  const resultArea = document.getElementById('result');
  const searchBox = document.getElementById('searchBox');

  superheroSearchButton.addEventListener('click',function(){

    const query = encodeURIComponent(searchBox.value.trim());

    fetch(`superheroes.php?query=${query}`)
      .then(response => response.text())
      .then(data => 
        {
          resultArea.innerHTML=data
        })

      .catch(() => alert('An error occurred.')); 
    });
  });

