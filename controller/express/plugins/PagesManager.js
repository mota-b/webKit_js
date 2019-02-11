/**
 * Module dependencies.
 */

module.exports = function (page) {
    let links = [
        "https://use.fontawesome.com/releases/v5.7.0/css/all.css", // Font Awesome
        "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css", // Bootstrap Core
        "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css", // Material Design Bootstrap 
        "/css/navBarStyle.css", // Navbar Style
    ],
    scripts = [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", // jQuery
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js", // Bootstrap tooltips
        "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.min.js", // Bootstrap Core
        "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/js/mdb.min.js", // Material Design Bootstrap JS 
        "/js/navBarScript.js", // Navbar Script
    ]
    
    switch (page) {
        case 'index':
        case 'login':
        case 'admin':
        case 'user':
            links.push("/css/"+page+"Style.css")
            scripts.push("/js/"+page+"Script.js")
            break;

        default:
            break;
    }

    return {links, scripts}
}