var elModal = document.querySelector(".modal")
var elModalShadow = document.querySelector(".modal__shadow")

//DOM document object mmodal
//BOM browser object model

function modal(){
    elModal.classList.add("modal__open")
    elModalShadow.style.display = "block"
}
function closeModal(){
    elModal.classList.remove("modal__open")
    elModalShadow.style.display = "none"

}