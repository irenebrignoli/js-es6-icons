

const allCards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

const cardsDom = document.getElementById('card-container');
const selectDom = document.getElementById('selector');

//creo gli array delle categorie

const animals = allCards.filter(object =>{
  if(object.type == 'animal'){
    return true;
  }else{
    return false;
  }
});

console.log(animals);

const vegetables = allCards.filter(object =>{
  if(object.type == 'vegetable'){
    return true;
  }else{
    return false;
  }
});

console.log(vegetables);

const users = allCards.filter(object =>{
  if(object.type == 'user'){
    return true;
  }else{
    return false;
  }
});

console.log(users);

createCard(allCards);


//creo le card nella pagina in base alla categoria selezionata
selectDom.addEventListener('change',

  function(){

    if(selectDom.value =='All'){
      createCard(allCards);
    }else if(selectDom.value =='Animal'){
      createCard(animals);
    }else if(selectDom.value =='Vegetable'){
      createCard(vegetables);
    }else if(selectDom.value =='User'){
      createCard(users);
    }    

});




//FUNZIONI  


function createCard(array){

  cardsDom.innerHTML = "";

  array.forEach((object) =>{

    cardsDom.innerHTML += ` <div class="card">
                              <div>
                                <i class="icon fa-solid ${object.prefix}${object.name}"></i>
                              </div>
                              <h3>${object.name}</h3>
                            </div>`;
  
  });

  addColor(array);
}


function addColor(array){

  let iconDom = document.getElementsByClassName('icon');

  array.forEach((object,index) =>{

  if(object.color == 'orange'){
    iconDom[index].classList.add('orange');
  } else if(object.color == 'green'){
    iconDom[index].classList.add('green');
  } else if(object.color == 'blue'){
    iconDom[index].classList.add('blue');
  }
  
  });
}
