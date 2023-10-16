const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');
acordeonTriggers.forEach((triggers) => {
    triggers.addEventListener('click', () => {
        const isOpen = triggers.parentElement.classList.contains('open');
        if (isOpen) {
            triggers.parentElement.classList.remove('open');
        } else {
            triggers.parentElement.classList.add('open');
        }
    })
})