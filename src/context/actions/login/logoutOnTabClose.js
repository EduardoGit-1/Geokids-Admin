window.onunload  = function () {
    let rememberMe = JSON.parse(localStorage.getItem("rememberMe"))
    if(!rememberMe) localStorage.clear()
}