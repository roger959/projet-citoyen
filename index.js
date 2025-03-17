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


    function toggleText(button) {
        const hiddenText = button.nextElementSibling;
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "block";
            button.textContent = "▲";
        } else {
            hiddenText.style.display = "none";
            button.textContent = "▼";
        }
    }

    function togglePhotos() {
        const gallery = document.getElementById('photoGallery');
        if (gallery.classList.contains('hidden')) {
            gallery.classList.remove('hidden');
        } else {
            gallery.classList.add('hidden');
        }
    }   
    function toggleMenu() {
        const sideMenu = document.getElementById('sideMenu');
        if (sideMenu.style.left === '0px') {
            sideMenu.style.left = '-250px';
        } else {
            sideMenu.style.left = '0px';
        }
    }