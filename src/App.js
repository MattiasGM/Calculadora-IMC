function App() {
    formButton.addEventListener('click', submit)

    function submit() {
        let peso = document.querySelector('#formPeso').value.replace(',','.')
        let altura = document.querySelector('#formAltura').value.replace(',','.')
        let divResults = document.querySelector('#results')
        let imc = peso / altura ** 2

        if(peso.length !== 0 && altura.length !== 0 && imc) { //verificação de inputs
            divResults.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${getDiagnosticImc(imc)})`
            divResults.setAttribute('class', 'correct')
        }else { 
            divResults.innerHTML = `Preencha todos os campos corretamente!`
            divResults.setAttribute('class', 'error')
        }
    }

    function getDiagnosticImc(imc) {
        const grau = ['Obesidade grau III', 'Obesidade grau II', 'Obesidade grau I', 'Sobrepeso', 'Normal', 'Abaixo do peso']
        const nivel = [39.9, 34.9, 29.9, 24.9, 18.5, 0]

        for(let pos in nivel) {
            if(imc >= nivel[pos]) return grau[pos]
        }
    }
}

App()
