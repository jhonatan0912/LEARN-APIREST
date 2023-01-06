const input = document.getElementById('input')

let container = document.getElementById('container')

const getData = async () => {
  let response = await fetch('https://rickandmortyapi.com/api/character/');
  let { results } = await response.json();

  console.log(results);



  input.addEventListener('change', (e) => {

    for (let i = 1; i < results.length; i++) {
      if (results[i].name.toLowerCase().includes(e.target.value)) {
        let div = document.createElement('div')

        let result = results[i];
        div.innerHTML += `
        <img src=${result.image}>
        <p><b>Name:</b> ${result.name}</p>
        <p><b>Gender:</b> ${result.gender}</p>
        <p><b>Specie:</b> ${result.species}</p>
        `
        div.classList.add('p-4', 'border', 'rounded')
        container.append(div)
        document.body.append(container)
      }
    }
  })



}


getData()