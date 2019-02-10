
// Main
$(document).ready(function(){
    function verifySession(){
        let user = sessionStorage.getItem("user")
        if(user){
            console.log(user);
            $(".navbar-nav.ml-auto").html("")
            
            $(".navbar-nav.ml-auto").append(

            )
        }else{
            
            console.log(user);
        }
    }
    verifySession()
    
})