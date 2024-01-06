function global () {

    const ListaUsuarios =  JSON.parse(localStorage.getItem('ListaUsuarios'));
    const botaoAcessar = document.querySelector('#acessar');
    console.log(ListaUsuarios)
   let caixaMsg = document.querySelector('#paragrafo-login'); 


    
    function logar() {
        
        let loginEmail = document.querySelector('#login-email').value
        let loginSenha = document.querySelector('#login-senha').value
   

             for(usuario of ListaUsuarios){
                 caixaMsg.innerHTML = ''
                 if(loginEmail === usuario.email && loginSenha === usuario.senha){
                     let msgIsvalid = document.createElement('p')
                    msgIsvalid.innerHTML = 'Login efetuado com sucesso'
                    caixaMsg.appendChild(msgIsvalid)
                    caixaMsg.style.backgroundColor='#84ffa0'
                    setTimeout(()=> {
                        location.href ='PaginaPrincipal.html';
                        
                    },4000);
                
                    break
                    
                } else {
                    caixaMsg.innerHTML = ''
                    document.querySelector("#login-email").value = ''
                    document.querySelector("#login-senha").value = ''
                    let msgInvalid = document.createElement('p')
                    msgInvalid.innerHTML = 'Login Inválido'
                    msgInvalid.style.color="#fff"
                    caixaMsg.appendChild(msgInvalid)
                    caixaMsg.style.backgroundColor='#ec193f'
                    
                }
                
                
            
            }
           
        }  
        
        
    // }

    botaoAcessar.addEventListener('click',logar)
    
   

}
global();