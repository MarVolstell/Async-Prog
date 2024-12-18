/* const waitForElement = (selector)=>{
    return new Promise((resolve)=>{
        const checkExist = setInterval(()=>{
            const element = document.querySelector(selector)
            if(element){
                clearInterval(checkExist)
                resolve(element)
            }
        }, 100)
    })
}

const settupElement = ()=>{
    const element = document.querySelector("#myElement")
    element.textContent = "hello :3"
}


const main = async()=>{
    try {
        const element = await waitForElement("#myElement")

        element.textContent = "hello :3"
        element.style.color = "green"
        console.log("huh?")
    } catch (error) {
        console.log('BAD' + error)
    }
}

setTimeout(()=>{
    const parent = document.querySelector(".container")
    const newElement = document.createElement('div')
    newElement.id ="myElement"
    parent.appendChild(newElement)
}, 2000)

main() 
let uhhhh
const                    car = document.querySelector(".cat")

const waitForKatinas = (input, targetWord)=>{
    return new Promise((resolve, reject)=>{
        input.addEventListener('input', ()=>{
            if(input.value === targetWord){
                resolve()
                console.log("yep")
            }else{
                reject()
                console.log("nope")
            }}
        )
    })
}

const main = async ()=>{
    console.log("ivesk")
    const input = document.querySelector("input")
    try {
         await waitForKatinas(input, "katinas")
         console.log("currect")
    } catch (error) {
        console.log("3: " + error)
    }
}

document.querySelector('input').addEventListener('input', main) */

const getData = async (url) =>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
        } catch (error) {
        console.log(error)
    }
} 


const generateSelect = async ()=>{
    const form = document.createElement('form')
    document.querySelector('.container').appendChild(form)
    const input = document.createElement("input")
    input.type = "text"
    input.setAttribute("id", "placeNames")
    input.setAttribute("list", "placeNamesList")
    form.appendChild(input)
    const select = document.createElement('datalist')
    select.setAttribute("id", "placeNamesList")
    form.appendChild(select)
    for(let place of await getData("https://api.meteo.lt/v1/places")) {
        const option = document.createElement('option')
        option.value = place.name
        select.appendChild(option)
    }
}
generateSelect()


const bleh = async(title)=>{
const whatever = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=3d69fe0`)
const data = whatever.json()
console.log(data)}

bleh("sky")