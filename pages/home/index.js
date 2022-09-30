let main = document.querySelector("main")



function createInputNone () {
    let div = document.createElement("div")
    div.classList = "input-none flex flex-col items-center"

    let h2 = document.createElement("h2")
    h2.classList = "input-none-title text-1-bold"
    h2.innerText = "Nenhum valor cadastrado"

    let p = document.createElement("p")
    p.classList = "input-none-text"
    p.innerText = "Registrar novo valor"

    div.append(h2, p)
    main.append(div)
}

function addValueCard (selectedType, object) {
    let totalSum = document.getElementById("entries-sum")
    let sum = 0
    object.forEach(element => {
        let { id, value, categoryID } = element
        let section = document.createElement("section")
        section.classList = "flex justify-between items-center input-values"
        section.id = `value-card-${id}`
    
        let divValue = document.createElement("div")
        let pValue = document.createElement("p")
        pValue.classList = "value-card-number"
        pValue.innerText = `R$ ${value}`
    
        let divButtons = document.createElement("div")
        divButtons.classList = "flex justify-between items-center"
    
        let pType = document.createElement("p")
        pType.classList = "flex items-center btn btn-greylow btn-value"
        
        // categoryID = selectedType
        if (valuesCategory.indexOf("Entrada") == categoryID) {
            pType.innerText = "Entrada"
            section.classList.add("Entrada")
            pType.id = "Entrada"
        } else if (selectedSaida = true) {
            pType.innerText = "Saida"
            pType.id = "Saída"
            section.classList.add("Saída")
        }
    
        let button = document.createElement("button")
        button.classList = "btn icon"
        button.id = "value-card-remove"
        button.addEventListener("click", () => {
            removeValueCard(element)
            totalSum.innerText -= element.value
        })
    
        divValue.append(pValue)
        divButtons.append(pType, button)
        section.append(divValue, divButtons)
        main.append(section)
        sum += value
    });
    totalSum.innerText = sum
    filterValues()
}

function removeValueCard (element) {
    let sectionValueCard = document.getElementById(`value-card-${element.id}`)
    sectionValueCard.remove()    
}

function filterValues () {
    let buttons = document.querySelectorAll(".btn-filter")
    buttons.forEach(element => {
        // console.log(element)
        element.addEventListener("click", () => {
            // console.log(event.target)
            let selection = document.querySelectorAll(".input-values")
            hideElement(selection)
        })
    })
}

function hideElement (elements) {
    // console.log(elements)
    // elements.forEach(element => {
    //     if (element.id == "Entrada") {
    //         console.log("deu")
    //         document.querySelectorAll(".Saída").style.visibility = "hidden"
    //     }
    // })
}