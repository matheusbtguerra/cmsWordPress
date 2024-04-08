const chk = document.getElementById('chk')
const themeSystem = localStorage.getItem("themeSystem") || "light"

chk.addEventListener('click', () => {
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light";

    localStorage.setItem("themeSystem", newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)

    if(theme == "light") {
       const switchbg = document.getElementById("swt").style.backgroundColor = "#ededf2";
    } else {
        const switchbg = document.getElementById("swt").style.backgroundColor = "#a6aec1";
    }
}

defineCurrentTheme(themeSystem)