
// PRECISA ARRUMAR O .SPAN N ESTÁ FICANDO ALINHADO COM OS INPUT



window.addEventListener('load', function() {

    const removeErrors = function() {
        const errorSPan = document.querySelectorAll('main form.conteudoprincipal1 span.error');
        errorSPan.forEach(span => span.remove());
    };

    const createError = function (input, mensagem) {
        const errorSpan = document.createElement('span');
        errorSpan.innerText = mensagem;
        input.insertAdjacentElement('afterend', errorSPan);
    }

    const form = document.querySelector('main form.conteudoprincipal1')

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        removeErrors();

        let hasErros = false;
        
        const inputList = document.querySelectorAll('main form.conteudoprincipal1 input')

        inputList.forEach (input => {
            if(!input.value){
                hasErros= true
                createError(input, 'Campo Obrigatorio');
            }
        });

        if (!hasErros) {
            this.submit();
        }      
    });
});