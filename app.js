const navigation = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.navigation-mobile-toggle')



toggleBtn.addEventListener("click", () =>{
    const visible = navigation.getAttribute("visible")

    if (visible === "false"){
        navigation.setAttribute("visible", true)
        toggleBtn.setAttribute("expanded",true)
    } else if (visible === "true") {
        navigation.setAttribute("visible", false)
        toggleBtn.setAttribute("expanded",false)
    }
})

