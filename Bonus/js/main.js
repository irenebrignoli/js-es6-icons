


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

//creo i nuovi colori random

let newAnimalColor = `#${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}`;

console.log('newAnimalColor: ' + newAnimalColor);

let newVegetableColor = `#${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}`;

console.log('newVegetableColor: ' + newVegetableColor);


let newUserColor = `#${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}${generateColorElement()}`;

console.log('newUserColor: ' + newUserColor);




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

const vegetables = allCards.filter(object =>{
  if(object.type == 'vegetable'){
    return true;
  }else{
    return false;
  }
});

const users = allCards.filter(object =>{
  if(object.type == 'user'){
    return true;
  }else{
    return false;
  }
});

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

//genera card
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

//assegna colore 
function addColor(array){

  let iconDom = document.getElementsByClassName('icon');

  array.forEach((object,index) =>{

  if(object.type == 'animal'){
    iconDom[index].style.color = newAnimalColor;
  } else if(object.type == 'vegetable'){
    iconDom[index].style.color = newVegetableColor;
  } else if(object.type == 'user'){
    iconDom[index].style.color = newUserColor;
  }
  
  });
}

//scegli casualmente elemento array
function generateColorElement(){

	const array = ['A','B','C','D','E','F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	let randomElement = Math.floor(Math.random() * array.length);
	return array[randomElement];

}



