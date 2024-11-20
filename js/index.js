const dados = document.querySelectorAll(".char img");
const buttonE = document.querySelector('#prevBtn');
const buttonD = document.querySelector('#nextBtn');
const nomes = document.querySelectorAll('.clientName');
let cont = 0;

const pessoas = {
    nomes: ["Patricia", "Carlos", "Fernanda"],
    job: ["Jornalista", "Programador", "Designer"]
}

buttonE.addEventListener('click', () => {
    if(cont == 0) {
        dados[cont].classList.remove('active');
        nomes[cont].classList.remove('active');
        cont = 2;
    } else{
        dados[cont].classList.remove('active');
        nomes[cont].classList.remove('active');
        cont--;
    }

    dados[cont].classList.add('active');
    nomes[cont].classList.add('active');

})


buttonD.addEventListener('click', () => {
    if(cont < 2) {
        cont++;
        dados[cont - 1].classList.remove('active');
        nomes[cont - 1].classList.remove('active');

    } else{
        dados[cont].classList.remove('active');
        nomes[cont].classList.remove('active');
        cont = 0;
    }
    dados[cont].classList.add('active');
    nomes[cont].classList.add('active');

})
