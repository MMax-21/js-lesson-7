function setConfigurate(property) {
    switch (property) {
        case 'theme':
            const property = document.documentElement.getAttribute('data-theme');
            if (property == 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
            }
            else {
                document.documentElement.setAttribute('data-theme', 'dark');

            }
            break;
    
        case 'hide_name':
            formControlName.classList.toggle('hide');
            break;

        case 'hide_phone':
            formControlPhone.classList.toggle('hide');
            break;

        case 'hide_form':
            form.classList.toggle('hide');
            break;
    }
}

function bindSwitchs(switchItems) {
    for(let i = 0; i < switchItems.length; i++) {
        const switchItem = switchItems[i];

        switchItem.addEventListener('click', function() {
            switchItem.classList.toggle(classSwitchActive);
            const property = switchItem.getAttribute('data-property');
            setConfigurate(property);
            console.log(property);
        })
    }
}

bindSwitchs(switchControls);