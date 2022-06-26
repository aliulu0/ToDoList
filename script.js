const inputDom = document.querySelector('#task')
const addBtnDom = document.querySelector('#addButton');
const listDom = document.querySelector('#list')

addBtnDom.addEventListener('click', addItem)
inputDom.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        e.preventDefault()
        document.getElementById('addButton').click()
    }
})

function addItem(){
    if(inputDom.value){
        let liDom = document.createElement('li')
        liDom.innerHTML = inputDom.value
        listDom.appendChild(liDom)

        let removeBtn = document.createElement('span')
        removeBtn.classList.add('close')
        removeBtn.innerHTML ='X'
        liDom.appendChild(removeBtn)
        inputDom.value = ""
        $(".success").toast('show')

        removeBtn.addEventListener('click', removeItem)
        removeBtn.addEventListener('mouseover', buttonColor)
    

        function removeItem(){
            let answer = window.confirm('Are you sure you want to remove')
            if(answer){
                liDom.remove()
                $(".remove").toast("show")
            }
        }
        
        function buttonColor(){
            removeBtn.style.backgroundColor = 'red'
        }


        liDom.addEventListener('click',selectItem)
        function selectItem(){
            liDom.classList.toggle("checked")
        }

        const removeAllDom = document.querySelector('#removeAllButton')
        removeAllDom.addEventListener('click',removeAll)

        function removeAll(){
            listDom.remove()
        }
    }else{
        $(".error").toast('show')
    }
}