$(document).ready(function () {
  console.clear()
  const input = document.getElementById('input')
  const btnSearch = document.getElementById('btn-buscar')
  const container = document.createElement('div');
  const btnToggleDarkMode = document.getElementById("btn-toggle-dark")
  const formContainer = document.querySelector(".form-container")

  btnSearch.addEventListener('click', (e => {
    e.preventDefault();

    const getData = async (idCharacter = "") => {
      try {
        idCharacter = input.value;
        if (idCharacter == "") {
          alert("Input is empty, please insert a number");
        } else if (idCharacter > 826) {
          alert("Introduced number is not disponible")
        }
        else {
          let data = await fetch("https://rickandmortyapi.com/api/character/" + idCharacter)
          let result = await data.json();
          input.value = "";


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
          container.append(article)
          container.classList.add('container', "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3", "lg:grid-cols-4", "m-auto")
          // document.body.append(article)
          document.body.append(container)
          article.classList.add("font-bold", "p-5", "bg-red-400", "w-60", "m-auto", "mt-5", "rounded-2xl");
        }

      } catch (error) {
        console.log(error);
      }

    }
    getData()
  }))
  $("#btn-toggle-dark").click(function () {
    document.body.classList.toggle("dark")
    formContainer.classList.toggle("border-white")
    input.classList.add("text-black")
    if (document.body.classList.contains("dark")) {
      btnToggleDarkMode.src = "./assets/img/sun.svg"
    } else {
      btnToggleDarkMode.src = "./assets/img/moon.svg"
    }
  });

});

