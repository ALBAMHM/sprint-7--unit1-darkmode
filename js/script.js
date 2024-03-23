document.addEventListener("DOMContentLoaded", function() {
    let darkModeBtn = document.getElementById("darkModeBtn");
    let html = document.getElementById("html");
    let buttonFather = document.getElementById("ButtonFather");

    darkModeBtn.addEventListener("click", function() {
        if (!html.classList.contains("dark-mode")) {
            html.classList.add("dark-mode");
            
            
            let lightModeBtn = document.getElementById("LightModeBtn");
            if (lightModeBtn) {
                lightModeBtn.remove();
            }
        } else {
            html.classList.remove("dark-mode");
            html.classList.add("light-mode");
            
            
            if (!document.getElementById("LightModeBtn")) {
                let lightModeBtn = document.createElement("button");
                lightModeBtn.id = "LightModeBtn";
                lightModeBtn.innerHTML = `Light mode  <img src='/assets/img/sol.png' width="20px">`;
                lightModeBtn.addEventListener("click", function() {
                    html.classList.remove("light-mode");
                });
                //buttonFather.appendChild(lightModeBtn);
            }
        }
    });
});