

const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file){
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.play();
    }

})