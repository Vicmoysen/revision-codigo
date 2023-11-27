const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  // Faltaba . antes de name
const $b = document.querySelector('.blog');  // Tenia # en lugar de .
const $l = document.querySelector('.location');

async function displayUser(username) {   // Faltaba añadir Async
    $n.textContent = 'cargando...';

    const response = await fetch(`${usersEndpoint}/${username}`) // Se modifico respuesta del fetch con los dos then 
    const data = response.json() // Faltaba convertir la respuesta a JSON  
    data.then( data => { //Se añadio Promise para luego usar data como parámetro

      console.log(data);
      
      // TemplateLiterals mal declarado con apostrofe y no `` en las tres lineas
      $n.textContent = `${data.name}`;   
      $b.textContent = `${data.blog}`;
      $l.textContent = `${data.location}`;
    });
}

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    // Faltaba $ antes de la n
    $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

// Se corrigió la indentación en todo el código 