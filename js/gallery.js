const galleryHidden = document.querySelector(".gallery.hidden");
const addBtn = document.getElementById("more");


addBtn.addEventListener('click', () => {
    if (galleryHidden.style.display === "none") {
        galleryHidden.style.display = "grid";
        galleryHidden.style.direction = "rtl";
        addBtn.innerText = 'CLOSE'
    } else {
        galleryHidden.style.display = "none";
        addBtn.innerText = "SEE MORE";
    }
});