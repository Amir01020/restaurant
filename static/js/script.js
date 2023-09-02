let d = document
let btnForm = d.querySelector('#btnForm')
let modal = d.querySelector('.modal')
let close = d.querySelector('#close')
let burgerModal = d.querySelector('#burgerModal')
let burger = d.querySelector('#myBurger')
let burgerClose = d.querySelector('#burgerClose')

function oupen(btn,myClass ,block) {
    btn.addEventListener('click',(event)=>{
        event.preventDefault()
        block.classList.add(myClass)
        d.body.style.overflow='hidden'
       
    })
    
}

oupen(btnForm,'modalActive',modal)
oupen(burger,'burgerModalActive',burgerModal)
function closeBloc(btn,myClass ,block) {
    btn.onclick=(event)=>{
        event.preventDefault()
        block.classList.remove(myClass)
        d.body.style.overflow='auto'
        
    }
}
closeBloc(close,'modalActive',modal)
closeBloc(burgerClose,'burgerModalActive',burgerModal)

let urls = d.querySelectorAll('#urls')
let btnForms = d.querySelector('#btnForms')


btnForms.onclick=(event)=>{
    event.preventDefault()
    modal.classList.add('modalActive')
    d.body.style.overflow='hidden'
    burgerModal.classList.remove('burgerModalActive')
    
}

urls.forEach(i => {
    i.onclick=()=>{
        burgerModal.classList.remove('burgerModalActive')
        
    }
});


