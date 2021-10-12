const heads = document.querySelectorAll('.contacts__head')
const bodys = document.querySelectorAll('.contacts__body')

heads.forEach(item => {
    item.addEventListener('click', () => {

        bodys.forEach(el => {
            el.classList.remove('._body-show')
            let arrow = item.querySelector('.contacts__arrow')

            if (item.getAttribute('data-attr') == el.getAttribute('data-attr')) {
                if (el.classList.contains('_body-show')) {
                    el.classList.add('_body-hide')
                    arrow.classList.add('_de-rotate')
                    
                    setTimeout(() => {
                        toggleClass(el, '_body-show', '_body-hide')
                        toggleClass(arrow, '_rotate', '_de-rotate')
                    }, 300)

                    return
                }

                toggleClass(el, '_body-show')
                toggleClass(item.querySelector('.contacts__arrow'), '_rotate')
            }
        })

    })
})

const chooses = document.querySelectorAll('.contacts__branch')
const branches = document.querySelectorAll('.contacts__branch_content')

chooses.forEach(item => {

    item.addEventListener('click', () => {

        chooses.forEach(ch => {
            ch.classList.remove('branch-active')
        })
    
        branches.forEach(el => {
            item.classList.add('branch-active')

            el.classList.add('_hide')
            if (item.getAttribute('data-branch') === el.getAttribute('data-branch')) {
                el.classList.add('_show')
                setTimeout(() => {
                    el.classList.remove('_hide')
                }, 350)
            }
        })
    })
})