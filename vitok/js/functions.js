const toggleClass = (item, ...classNames) => {
    if (item.classList.contains(...classNames)) {
        item.classList.remove(...classNames)
    } else {
        item.classList.add(...classNames)
    }
}