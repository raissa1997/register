
const usernameInput = document.querySelector("#username");
const email2Input= document.querySelector("#email");
const password1Input = document.querySelector("#password1");
const password2Input = document.querySelector("#password2");




const small6 = document.querySelector("small6");
const checkInput = document.querySelector("#check");

//verification du username
    var small1 = document.querySelector('#small1');
    usernameInput.addEventListener('input' , () =>{
        if(usernameInput.value.length >= 4) {
            small1.textContent = '';
        }else{
            small1.textContent = ' Le nom doit contenir au moins 4 caractères.';
        }
    })
    // la fonction pour verifier l'adresse email

            var small2 = document.querySelector('#small2');
            
            var ma = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                email2Input.addEventListener('input' , () =>{
                    if(ma.test(email2Input.value)){
                        small2.textContent = ' ';
                    
                    
                    }else{
                        small2.textContent= ' L adresse email n est pas valide' ;
                    }   
                })

            //Au moins 1  majuscule
            //Au moins 1 caractere
            // Au moins 1 c minuscule
            //Au moins 1 chiffre
            //Minimum 8 caractères
        var small3 = document.querySelector('#small3');
        var str = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        password1Input.addEventListener('input' , () =>{
        if( str.test(password1Input.value)){
            small3.textContent = ' ';
        }else{
            small3.textContent= 'Le mot de passe n est pas valide' ;
        }
        })
        //egalité des mots de passe
        var small4 = document.querySelector('#small4');
    password2Input.addEventListener('input' , () =>{
    if(password1Input.value != password2Input.value) {
        small4.textContent= 'Le mot de passe n est pas le meme' ;
    } else {
        small4.textContent = ' ';
    }
    })
    //verifier le checked
    var small5 = document.querySelector('#small5');   
    checkInput.addEventListener('input' , () =>{   
        if(checkInput.checked){
            small5.textContent = ' '; 
        }else{
            small5.textContent= 'cochez d abord la case' ;
        }
    })
   
//pour les champs obligatoires
        var small7 = document.querySelector('#small7');
        let element=document.querySelector('#re')
        element.addEventListener('click', function() {
            if(usernameInput.value=="") {
                small1.textContent = 'champ obligatoire';
            }else{
                small1.textContent = '';
            }
            if(email2Input.value==""){
                small2.textContent = 'champ obligatoire ';
            }else{
                small2.textContent= ' ' ;
            }   
            if( password1Input.value==""){
                small3.textContent = 'champ obligatoire ';
            }else{
                small3.textContent= '' ;
            }
            if(password2Input.value=="") {
                small4.textContent= 'champ obligatoire' ;
            } else {
                small4.textContent = ' ';
            }
            if(checkInput.checked){
                small5.textContent = ' '; 
            }else{
                small5.textContent= 'cochez d abord la case' ;
        }
        });


        //Gerons la page de connexion
       
        const emailInput= document.querySelector("#email2");
        const passwordInput = document.querySelector("#password3");

        var small10 = document.querySelector('#small10');
            
        var ma = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            emailInput.addEventListener('input' , () =>{
                if(ma.test(emailInput.value)){
                   small10.textContent = ' ';
                
                
                }else{
                   small10.textContent= ' L adresse email n est pas valide' ;
                }   
            })


        var small11 = document.querySelector('#small11');
        var str = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        passwordInput.addEventListener('input' , () =>{
        if( str.test(passwordInput.value)){
            small11.textContent = ' ';
        }else{
            small11.textContent= 'Le mot de passe n est pas valide' ;
        }
        })


        var small13 = document.querySelector('#small13');
 let elem=document.querySelector('#so')
        elem.addEventListener('click', function() {
            if(emailInput.value=="") {
                small10.textContent = 'champ obligatoire';
            }else{
                small10.textContent = '';}
                if( passwordInput.value==""){
                    small11.textContent = 'champ obligatoire ';
                }else{
                    small11.textContent= '' ;
                }  
            })

                
        
       // var eye =document.querySelector("#eye");
        //var eye1 = document.querySelector("#eye1");
             //  eye.addEventListener('click', function() {
               //    if(password1Input.type === 'password1') {
                 //   password1Input.type ='text' ;
                   // eye1.classList.remove('fa-eye-slash');
                    //eye1.classList.add('fa-eye');
                //   }else{
                  //  password1Input.type ='password1'
                    //eye1.classList.remove('fa-eye-slash');
                  //  eye1.classList.add('fa-eye');
                  // } 

              //  }
             // )




