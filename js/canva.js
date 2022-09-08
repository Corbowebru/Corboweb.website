
function setCookie(name,value,daystoexpires) {
    const date = new Date();
    date.setTime(date.getTime() + daystoexpires * 24 * 60 * 60 * 1000);
    date.toUTCString();
    document.cookie = `${name}=${value};expires=${daystoexpires}`
}


function deleteCookie(name) {
    setCookie(name,null,null)

}



function getCookie(name) {
    let decodedcookie = decodeURIComponent(document.cookie);
    let cookiearray = decodedcookie.split("; ")
    let result;
    cookiearray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1)
        }

    })
    return result;
}
