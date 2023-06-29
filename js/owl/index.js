const maisIcones = document.querySelectorAll('.mais');
        maisIcones.forEach(function(maisIcone) {
            maisIcone.addEventListener('click', function() {
                const resposta = this.nextElementSibling;
                resposta.classList.toggle('mostrar');
            });
        });