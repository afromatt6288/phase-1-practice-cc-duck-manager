// write your code here!

let currentDuck
let newDuck

fetch('http://localhost:3000/ducks')
.then(response =>response.json())
.then(duckData => {
    //// Function Wishlist////
    // Function thattakes each duck and displays and image of it in the "#duck-nav" area
    renderDucks(duckData)
    // Function that displays the ducks details (name, image, and likes button) when the image is clicked. Extra ... Also display first duck on loading...
    renderDuckDetails(duckData[0])
    // Function that increases the number of likes displayed on the the like button when clicked
    addDuckLikes()
    // Function that allows user to add a new duck to the list
    addNewDuck([duckData])
})

function renderDucks(duckData) {
    let duckNav = document.querySelector('#duck-nav')
    duckData.forEach(duck => {
        let duckImage1 = document.createElement('img')
        duckImage1.src = duck.img_url
        duckImage1.alt = `Image of ${duck.name}`
        duckNav.append(duckImage1)
        
        duckImage1.addEventListener('click', () =>{
            renderDuckDetails(duck)
        })
    })

}

function renderDuckDetails(duck) {
currentDuck = duck
//selectors for duck details
duckName = document.querySelector('#duck-display-name')
duckImage2 = document.querySelector('#duck-display-image')
duckLikeButton = document.querySelector('#duck-display-likes')

duckName.textContent = currentDuck.name
duckImage2.src = currentDuck.img_url
duckImage2.alt = `Image of ${currentDuck.name}`
duckLikeButton.textContent = `Likes  ${currentDuck.likes}`

}

function addDuckLikes() {
    duckLikeButton = document.querySelector('#duck-display-likes')
    duckLikeButton.addEventListener('click', () => {
        currentDuck.likes = currentDuck.likes +1 
         renderDuckDetails(currentDuck)
    })
}

function addNewDuck (duckData) {
    newDuckData = []
    let newDuckForm = document.querySelector('#new-duck-form')
    newDuckForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const newDuck = {
            name: (e.target['duck-name-input'].value),
            img_url: (e.target['duck-image-input'].value),
            likes: parseInt('0')
        }
        newDuckData.push(newDuck)
        renderDucks(newDuckData)
        
        newDuckForm.reset()
    })
  
}

// Test Data //
// Duck Name: Duck Sparrow
// Duck Image Url: https://i.pinimg.com/474x/3a/a1/ce/3aa1ce34d7615c4656dff095dc3524e0.jpg