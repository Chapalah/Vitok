
showProducts('')

// ------------------ header ------------------

const burger = document.querySelector('.header__burger') 
const menu = document.querySelector('.header__menu')
const header = document.querySelector('.header')
const menuLinks = document.querySelectorAll('.header__link')
const mainBlock = document.querySelector('.main-block')

const blocks = [mainBlock, document.querySelector('.info-block'), document.getElementById('products'), document.getElementById('vacancies'),  document.getElementById('contacts'), document.getElementById('kitchen')]

burger.addEventListener('click', () => {
    if (burger.classList.contains('opened')) {
        toggleClass(burger, 'opened')
        toggleClass(menu, '_close-menu')
        
        setTimeout(() => { 
            toggleClass(menu, '_show-menu') 
            toggleClass(menu, '_close-menu')
            // document.body.style.overflow = 'auto'
        }, 250)
    } else {
        toggleClass(burger, 'opened')
        toggleClass(menu, '_show-menu')
        // document.body.style.overflow = 'hidden'
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        const blockId = link.getAttribute('href')

        if (burger.classList.contains('opened')) {
            toggleClass(burger, 'opened')
            toggleClass(menu, '_close-menu')
            
            setTimeout(() => { 
                toggleClass(menu, '_show-menu') 
                toggleClass(menu, '_close-menu')
            }, 250)
        }

        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

document.querySelector('.main-block__button').addEventListener('click', () => {
    document.querySelector(document.querySelector('.main-block__button').getAttribute('data-link')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header__mini')
    } else {
        header.classList.remove('header__mini')
    }    

    blocks.forEach(block => {
        if (block.getBoundingClientRect().top < 100 && block.getBoundingClientRect().top > -100) {
            menuLinks.forEach(link => {
                link.classList.remove('link-active')

                if (link.getAttribute('href') === block.getAttribute('data-block'))
                    link.classList.add('link-active')
            })
        }
    })

    // let windowCenter = (window.innerHeight / 2) + window.scrollY
    // blocks.forEach(block => {
    //     let scrollOffset = block.offsetTop

    //     if (windowCenter >= scrollOffset) {
    //         console.log(block.getAttribute('data-block'));
    //         menuLinks.forEach(link => {
    //             link.classList.remove('link-active')

    //             if (link.getAttribute('href') === block.getAttribute('data-block'))
    //                 link.classList.add('link-active')
    //         })
    //     }
    // })
})

filters.forEach(item => {
    item.addEventListener('click', () => {
        let currentFilter = ''

        filters.forEach(filter => {
            filter.classList.remove('_fillter-active')
        })

        currentFilter = item.getAttribute('data-product')
        showProducts(currentFilter)

        item.classList.add('_fillter-active')
    })
})