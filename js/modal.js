function openModal(modal) {
    const modalWrapper = modal.children[0]
    const modalContent = modalWrapper.children[0]
    const modalClose = modalContent.children[0]
    showModal()
    
    function showModal() {
        modal.classList.add('_show')
        document.body.style.overflow = 'hidden'
        
        setTimeout(() => {
            modalContent.classList.add('_modal-show')
        }, 250)
    }


    modalContent.addEventListener('click', e => { e.stopPropagation() })

    function closeModal(elem) {
        elem.addEventListener('click', e => {
            setTimeout(() => { modal.classList.remove('_show') }, 330)
            modalContent.classList.remove('_modal-show')
            document.body.style.overflow = 'auto'
        })
    }

    closeModal(modalWrapper)
    closeModal(modalClose)

}

document.getElementById('more-info').onclick = () => {
    openModal(document.getElementById('modal-info'))
}

document.getElementById('open-menu').onclick = () => {
    openModal(document.getElementById('modal-menu'))
}