
function AddAnimaiton() {
    let data = document.querySelectorAll(".animation_hedien");   
    for (let i = 0; i < data.length; i++) {
        let W = window.innerHeight;
        let T = data[i].getBoundingClientRect().top;
        let V = 150;

        if (W>T -V) {
            data[i].classList.add("active");
        } else {
            data[i].classList.remove("active");
        }
        
    }
}


window.addEventListener("scroll",AddAnimaiton);