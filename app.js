console.clear()
const input = document.getElementById('input')
const btnSearch = document.getElementById('btn-buscar')

btnSearch.addEventListener('click', (e => {
  e.preventDefault();

  const getData = async (idCharacter) => {
    try {
      idCharacter = input.value;
      console.log(idCharacter);
      let data = await fetch("https://rickandmortyapi.com/api/character/" + idCharacter)
      // console.log(data.lenght);
      let result = await data.json();
      // console.log(result);
      // input.value = "";


      let article = document.createElement('article')
      let imgCharacter = document.createElement('img')
      let pName = document.createElement('p')
      let pStatus = document.createElement('p')
      let pSpecies = document.createElement('p')
      let pGender = document.createElement('p')


      imgCharacter.src = `${result.image}`;
      pName.innerText = `Nombre: ${result.name}`;
      pStatus.innerText = `Estado: ${result.status}`;
      pSpecies.innerText = `Especie: ${result.species}`;
      pGender.innerText = `Genero: ${result.gender}`;
      article.append(imgCharacter, pName, pStatus, pSpecies, pGender)
      document.body.append(article)

      article.classList.add("font-bold", "p-5", "bg-red-400", "w-60", "m-auto", "mt-5", "rounded-2xl")
    } catch (error) {
      console.log(error);
    }

  }
  getData()
}))



