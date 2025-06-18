function playMusic() {
    var music = document.getElementById('music');
    var body = document.body;

    
    if (music.paused) {
        music.play();

       
        body.style.backgroundColor = "#ffffff";  
      
    } else {
        music.pause();

      //  document.body.style.backgroundImage = "url('Overlay.jpg')";

        body.style.backgroundColor = "#c7c7c7";  
    
    }
}


function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");


}

window.onclick = function(event) {
    if (!event.target.matches('.settings-button')) {
      var dropdown = document.getElementById("menu");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
}


function changePicture(){
    var themeImage = document.getElementById('themeimage');


    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event){
        var file = event.target.files[0];

        if (file){
            var reader = new FileReader();
            reader.onload = function(event){
                themeImage.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    
    };

    input.click();
}
