function handleClick(page) {
    console.log("Navigation vers : " + page);
    
    document.querySelectorAll('.content > div').forEach(div => {
        div.classList.add('hidden');
    });
    
    let section = document.getElementById(page);
    section.classList.remove('hidden');
    section.classList.add('fade-in');
}


function handleClick(page) {
    console.log("Navigation vers : " + page);
    
    document.querySelectorAll('.content > div').forEach(div => {
        div.classList.add('hidden');
    });
    
    let section = document.getElementById(page);
    section.classList.remove('hidden');
    section.classList.add('fade-in');
}
function toggleImages(button) {
    const images = document.querySelectorAll('.survey-image');
    let areHidden = Array.from(images).every(img => img.style.display === 'none');
    
    images.forEach(img => {
        img.style.display = areHidden ? 'block' : 'none';
    });
    
    button.textContent = areHidden ? 'Masquer les résultats ▲' : 'Afficher les résultats ▼';
}