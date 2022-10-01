let register = document.getElementById("buttonRegister")
let main = document.querySelector("main")

function openModal () {
    register.addEventListener("click", () => {
        createModal()
        let close = document.getElementById("close-button")
        let cancel = document.getElementById("cancel-button")
        close.addEventListener("click", () => {
            closeModal()
        })
        cancel.addEventListener("click", () => {
            closeModal()
        })
    })
}
openModal()

function closeModal () {
    let modal = document.querySelector(".modal-wrap")
    modal.remove()
}

function checkInput () {
    const format = /[\d.]/
    if (format.test(event.key) == false && event.keyCode != 8 && event.target.value !== undefined) {
        event.target.value = event.target.value.slice(0, -1)
    }
    return insertedValue = event.target.value
}

function setSelected(buttonEntrada, buttonSaida){
    if (event.target.id == "Entrada") {
        buttonEntrada.classList = "btn btn-outline btn-outline-selected"
        buttonSaida.classList = "btn btn-outline"
    } else if (event.target.id == "Saida") {
        buttonEntrada.classList = "btn btn-outline"
        buttonSaida.classList = "btn btn-outline btn-outline-selected"
    }
    
}

function createModal () {
    let section = document.createElement("section")
    section.classList = "modal-wrap"

    let modal = document.createElement("div")
    modal.classList = "modal flex flex-col justify-between"

    let header = document.createElement("header")
    header.classList = "flex justify-between items-center"

    let h2 = document.createElement("h2")
    h2.classList = "title-2-bold"
    h2.innerText = "Registro de valor"

    let buttonClose = document.createElement("button")
    buttonClose.id = "close-button"
    buttonClose.classList = "btn btn-greylow"
    buttonClose.innerText = "X"

    let pDescription = document.createElement("p")
    pDescription.classList = "text-1"
    pDescription.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"

    let divInput = document.createElement("div")
    divInput.classList = "flex flex-col"
    
    let inputLabel = document.createElement("label")
    inputLabel.htmlFor = "valueModal"
    
    let divInputCurrency = document.createElement("div")
    divInputCurrency.classList = "currency title-2-medium"

    let inputValue = document.createElement("input")
    inputValue.classList = "text-1 input"
    inputValue.type = "text"
    inputValue.id = "valueModal"
    inputValue.name = "valueModal"
    inputValue.placeholder = "00,00"
    inputValue.addEventListener("keyup", () => {
        checkInput()  
    })

    let divType = document.createElement("div")
    divType.classList = "flex items-center modal-type"

    let pType = document.createElement("p")
    pType.innerText = "Tipo de valor"
    pType.classList = "title-1-medium"

    let buttonEntrada = document.createElement("button")
    buttonEntrada.classList = "btn btn-outline"
    buttonEntrada.id = "Entrada"
    buttonEntrada.innerText = "Entrada"
    
    let buttonSaida = document.createElement("button")
    buttonSaida.classList = "btn btn-outline"
    buttonSaida.id = "Saida"
    buttonSaida.innerText = "Saída"
    
    buttonSaida.addEventListener("click", () => {
        setSelected(buttonEntrada, buttonSaida)
    })

    buttonEntrada.addEventListener("click", () => {
        setSelected(buttonEntrada, buttonSaida)
    })

    let divButtons = document.createElement("div")
    divButtons.classList = "flex justify-end modal-footer"
    
    let buttonCancelar = document.createElement("button")
    buttonCancelar.classList = "btn btn-greylow"
    buttonCancelar.innerText = "Cancelar"
    buttonCancelar.id = "cancel-button"

    let buttonInserir = document.createElement("button")
    buttonInserir.classList = "btn btn-primary"
    buttonInserir.innerText = "Inserir valor"
    buttonInserir.id = "insert-value-card"
    buttonInserir.addEventListener("click", () => {
        if (typeof insertedValue === "undefined" || insertedValue == undefined){
            alert("Insira um valor")
        } if (buttonEntrada.classList == "btn btn-outline" && buttonSaida.classList == "btn btn-outline") {
            alert("Selecione o tipo de valor")
        }else {
            let selectedType = document.querySelector(".btn-outline-selected")
            let type = selectedType.id
            insertedInputValue.push({id: `${insertedInputValue.length}`, value: `${inputValue.value}`, categoryID: `${type}`})
            addValueCard(type, insertedInputValue[insertedInputValue.length-1])
            closeModal()
            let sum = document.getElementById("entries-sum")
            if (sum.innerText != 0){
                removeNoValue()
            }
        }
    })

    divButtons.append(buttonCancelar, buttonInserir)
    divType.append(pType, buttonEntrada, buttonSaida)
    divInput.append(inputLabel, divInputCurrency, inputValue)
    header.append(h2, buttonClose)
    modal.append(header, pDescription, divInput, divType, divButtons)
    section.append(modal)
    main.append(section)
}