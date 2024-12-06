document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const show = params.get('show'); // Például: "globalis", "helyi", vagy "mind"

    if (show === 'globalis') {
        globalis();
    } else if (show === 'helyi') {
        helyi();
    } else if (show === 'mind') {
        mind();
    }
});


function globalis() {
    const globalID = document.querySelectorAll('.global');
    const localID = document.querySelectorAll('.local');
    
    globalID.forEach(element => {
        element.style.display = 'block';
    });
    localID.forEach(element => {
        element.style.display = 'none';
    });
}

function helyi() {
    const globalID = document.querySelectorAll('.global');
    const localID = document.querySelectorAll('.local');

    globalID.forEach(element => {
        element.style.display = 'none';
    });
    localID.forEach(element => {
        element.style.display = 'block';
    });
}

function mind() {
    const globalID = document.querySelectorAll('.global');
    const localID = document.querySelectorAll('.local');
    
    globalID.forEach(element => {
        element.style.display = 'block';
    });
    localID.forEach(element => {
        element.style.display = 'block';
    });
}


