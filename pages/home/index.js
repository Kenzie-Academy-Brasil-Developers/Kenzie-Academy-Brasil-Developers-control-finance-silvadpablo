let ul = document.querySelector("ul")
let main2 = document.querySelector("main")

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

function addValueCard (type, object) {
    let totalSum = document.getElementById("entries-sum")
    let sum = 0

    let { id, value } = object
    let li = document.createElement("li")
    li.classList = "flex justify-between items-center input-values"
    li.id = `value-card-${id}`

    let divValue = document.createElement("div")
    let pValue = document.createElement("p")
    pValue.classList = "value-card-number"
    pValue.innerText = `R$ ${value}`

    let divButtons = document.createElement("div")
    divButtons.classList = "flex justify-between items-center"

    let pType = document.createElement("p")
    pType.classList = "flex items-center btn btn-greylow btn-value"
    pType.innerText = type

    let button = document.createElement("button")
    button.classList = "btn icon"
    button.id = "value-card-remove"
    button.addEventListener("click", () => {
        removeValueCard(object)
        totalSum.innerText -= value
    })

    divValue.append(pValue)
    divButtons.append(pType, button)
    li.append(divValue, divButtons)
    ul.append(li)

    let allValuesElements = document.querySelectorAll(".value-card-number")
    let allValues = [...allValuesElements]
    let valueSum = []
    allValues.forEach(element => {
        valueSum.push(Number(element.innerText.substring(3)))
    });
    let total = valueSum.reduce((result, number) => result + number)

    totalSum.innerText = total
    filterValues()
}

function removeValueCard (element) {
    let sectionValueCard = document.getElementById(`value-card-${element.id}`)
    sectionValueCard.remove()
    let entriesSum = document.getElementById("entries-sum")
    let sumNumber = entriesSum.innerText
    if (sumNumber == 0) {
        addNoValue()
    }
}

function filterValues () {
    let buttons = document.querySelectorAll(".btn-filter")
    buttons.forEach(element => {
        element.addEventListener("click", () => {
            filter(element)
        })
    });
}

function filter(element) {
    ul.innerHTML = ""
    if (element.innerText == "Entradas") {
        let selection = insertedInputValue.filter((element) => element.categoryID == "Entrada")
        selection.forEach(element => {
            addValueCard(element.categoryID, element)
        });
    } else if (element.innerText == "Saídas") {
        let selection = insertedInputValue.filter((element) => element.categoryID == "Saida")
        selection.forEach(element => {
            addValueCard(element.categoryID, element)
        });
    } else {
        let selection = insertedInputValue.filter((element) => element.categoryID)
        selection.forEach(element => {
            addValueCard(element.categoryID, element)
        });
    }
}

function addNoValue () {
    let div = document.createElement("div")
    div.classList = "input-none flex flex-col items-center"

    let h2 = document.createElement("h2")
    h2.classList = "input-none-title text-1-bold"
    h2.innerText = "Nenhum valor cadastrado"

    let p = document.createElement("p")
    p.classList = "input-none-text"
    p.innerText = "Registrar novo valor"

    div.append(h2, p)
    main2.append(div)
}

function removeNoValue () {
    let noValue = document.querySelector(".input-none")
    noValue.remove()
}
addNoValue()