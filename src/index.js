//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

    function fetchFromApi() {

            fetch(imgUrl)
            .then(response => response.json()) // parsing as json
            .then(data => displayDogImages(data)) // calling a function to do something with the data

            fetch(breedUrl)
            .then(response => response.json()) // fetching dog breeds
            .then(data => renderAllBreeds(Object.keys(data.message)))  // calling a function to do something with the data and taking the data out of an object/string
            }

    function displayDogImages(data){
        const dogImageContainer = document.getElementById('dog-image-container')
        const dogData = data.message  // setting a var for the images information from the array
        dogData.forEach(img => {
            const dogImg = document.createElement('img')
            dogImg.src = img
            dogImageContainer.appendChild(dogImg)
        })  
    }

let allDogs = []

        function renderAllBreeds(dogs) {
        // add the breeds to the page
        //console.log(dogs.length)
        let ul = document.getElementById('dog-breeds') // ceating variable for ul
        for (let i = 0; i < dogs.length; i++) { // filter through all the dogs one at a time
            renderSingleBreed(dogs[i], ul)  //filter the dogs to the next function 
            allDogs.push(dogs[i])
        // console.log(dogs[i].charAt('a'));
        //letter.addEventListener('change', updateValue);
        }
    
        const breedDropDown = document.getElementById('breed-dropdown');
        breedDropDown.addEventListener('change', updateValue);
        function updateValue(e) {
        const selectedLetter = e.target.value; //this is grabbing the value of each letter in the drop down

            //get all dogs first letter that matches a,b,c,d
            //filter through all the dogs
            const dogBreedLetter = document.querySelectorAll('li') // this is matching up each li with the dog breed
            //console.log(dogBreedLetter)
            dogBreedLetter.forEach(li => {

                if (selectedLetter === li.innerHTML.charAt(0)){ //this says if the selected letter in the drop down equals the first letter of the breed
                    //unhide li that match. you need to use innerHTML. if you use innerText it hides the text for good
                    li.style.visibility = 'visible'; // this makes the li's you want to see visible
                //    dogBreedLetter.parentNode.removeChild(dogBreedLetter);
                
                } else {
                    // hide li
                    li.style.visibility = 'hidden'; // this hides the li's you dont want to see
                }

            })

    }
 }

    function renderSingleBreed(dog, ul) { // this function will list the dogs on the page

    

    //console.log(dog)
    let li = document.createElement('li') // create the list
    li.addEventListener('click', fontColor); //calls a click event to a new function i created to make a color change
    li.innerText = dog; // turn the dog string to html li
    ul.appendChild(li) // add the created li to the ul 
    //getSelectValue()

}

    function fontColor(event) {
    //console.log(event.target) // event.target targets the specific li/event
    event.target.style.color = 'green'; //changes the target to green
    }

document.addEventListener('DOMContentLoaded', fetchFromApi);