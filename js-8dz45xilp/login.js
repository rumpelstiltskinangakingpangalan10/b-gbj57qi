document.getElementById("p").value = "";
document.getElementById("u").value = "";
sessionStorage.setItem("authName", "");
sessionStorage.setItem("author", "");
sessionStorage.setItem("authProfile", "");


function login() {
    let u = document.getElementById("u");
    let p = document.getElementById("p");

    if (((u.value==null) || (u.value=="")))  {

        u.style.border = "1px solid red";

    }
    else if(((p.value==null) || (p.value==""))) {
        p.style.border = "1px solid red";
    }

    else{

        fetch("https://figureddit.com/store-z7g2sh9/author.json") //fetch all and post all author's details
        .then(function(response){
        return response.json();
        })
        .then(function(data){
                
                var max = Object.keys(data).length;
                
                for (var i = max; i >= 1; i-- ) {

                    var prevID = data[i];
                    
                    if(prevID[1] == u.value) {
                        
                        if(prevID[2] == p.value) {
                            sessionStorage.setItem("authName", prevID[1]);
                            sessionStorage.setItem("author", prevID[4]);
                            sessionStorage.setItem("authProfile", prevID[0]);
                            window.location.href = "backend.figureddit.com/auth/uq8Z4xtyz2-3sd2j238ds-z38sh9y12hs8"
                        }
                        
                        else{
                            u.value = "";
                            p.value = "";
                            u.placeholder = "u: x";
                            p.placeholder = "p: x";
                            u.style.border = "1px solid tomato";
                            p.style.border = "1px solid tomato";
                        }
                    }

                    else {
                        u.value = "";
                        p.value = "";
                        u.placeholder = "u: x";
                        p.placeholder = "p: x";
                        u.style.border = "1px solid tomato";
                        p.style.border = "1px solid tomato";
                    }
                }              

            }
        );
    }
}



function enterLogin(event) {
    if (event.key === "Enter") {
        login();
    }
}