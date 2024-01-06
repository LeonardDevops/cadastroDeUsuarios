// escoppo global da função protegendo todas as outras 
//função pra criar usuário 
function global () {
    const btnc = document.querySelector('#cadastrar');
   
    
    btnc.addEventListener('click', cadastrar)
  
    
        
 
       

      //FUNÇÃO CADASTRAR
      const Lista = []
    
     
    function criaUsuario(){
         
        let cadastroNome = document.querySelector('#cadastro-name').value;
        let cadastroEmail = document.querySelector('#cadastro-email').value;
        let cadastroSenha =  document.querySelector('#cadastro-senha').value;
        let caixaMsg = document.querySelector('#paragrafo');
        
        caixaMsg.innerHTML = ''
        
        if(cadastroEmail === '' && cadastroSenha === '') {
            let msgErro = document.createElement('p');
            msgErro.innerText =  'Cadastro Inválido'
            caixaMsg.appendChild(msgErro);
            msgErro.style.color="#fff"
            caixaMsg.style.backgroundColor="#ec193f"
           return;

        } else {
            let msgSucess = document.createElement('p');
            msgSucess.innerText =  'Cadastrado com Sucesso'
            caixaMsg.appendChild(msgSucess);
            caixaMsg.style.backgroundColor="#84ffa0"
            
            console.log(Lista)
            Lista.push({
                //nome:cadastroNome.value
                email:cadastroEmail,
                senha: cadastroSenha
                
            });

            setTimeout(()=> {
                location.href="index.html"
            },5000)
            
            
        }
        const ListaJson = JSON.stringify(Lista)
        localStorage.setItem('ListaUsuarios',ListaJson)
        console.log(ListaJson);
        
        
         
    }

    function cadastrar() {
                    // estou capturando o  botão cadastrar 
        if(btnc){
            criaUsuario();// inicializando a função dentro  da função cadastrar quando clicar vai inicializar outra funcão
            
                                    //estou escutando o evento click dentro do botão
            
        }
        
        
    }
    
    
  

    
    
    
    
}
global();
