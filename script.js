const removePicture = document.getElementById("buttonRemove");
const addPicture = document.getElementById("buttonShow");


addPicture.addEventListener("click", function () {
	pictures.style.display = 'flex';
})

removePicture.addEventListener("click", function () {
	pictures.style.display = 'none';
})

