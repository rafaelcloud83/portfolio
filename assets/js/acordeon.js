const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        //console.log('Clicou no acordeon');
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    });
});