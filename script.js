const icons = document.querySelectorAll('.icon');

icons.forEach(icone => {
    icone.onclick = () => {
        if (icone.classList.contains('filled')) {
            icone.classList.remove('filled');
        } else {
            icons.forEach(i => i.classList.remove('filled'));
            icone.classList.add('filled');
        }
    };
});