const filters = document.querySelectorAll('.products__fillter')
const products = document.querySelectorAll('.product')
let deleteButton = false
let blocksLoaded = 6

const showProducts = type => {
    if (type === '') {
        products.forEach(item => { item.classList.add('_hide') })

        for (let i = 0; i < products.length; i++) {
            products[i].classList.remove('_anim-hide', '_hide')
            products[i].classList.add('_anim-show');

            !deleteButton ? loadButton.style.display = 'flex' : ''

            if (i === blocksLoaded - 1)
                break
        }
    } else {
        products.forEach(item => {
            if (item.getAttribute('data-product') !== type) {
                item.classList.add('_anim-hide')
                setTimeout(() => {
                    item.classList.add('_hide')
                }, 300)
            } else {
                setTimeout(() => {
                    item.classList.remove('_anim-hide', '_hide')
                    item.classList.add('_anim-show')
                    loadButton.style.display = 'none'
                }, 350)
            }
        })
    }
}

const loadButton = document.querySelector('.products__button')

loadButton.addEventListener('click', () => {
    blocksLoaded += 6
    if (blocksLoaded >= products.length) {
        deleteButton = true
        loadButton.style.display = 'none'
    }
    showProducts('')
})

const productModal = document.getElementById('modal-product')

const fillModal = (image, title, text) => {
    const modalImage = productModal.querySelector('.modal__image').querySelector('img')
    const modalTitle = productModal.querySelector('.modal__title')
    const modalText = productModal.querySelector('.modal__text')
    
    modalImage.src = image
    modalTitle.textContent = title
    modalText.textContent = text
}

products.forEach(product => {
    product.addEventListener('click', () => {
        fillModal(product.querySelector('.product__image').querySelector('img').getAttribute('src'), 
                  product.querySelector('.product__text').textContent,
                  product.querySelector('.product__info').textContent)
        openModal(productModal)
    })
})