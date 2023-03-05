function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] - Verificar Data')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'image/mcrianca.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'image/madolescente.png')

            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'image/madulto.png')
            } else if (idade >= 60)
            //idoso
                img.setAttribute('src', 'image/midoso.png')

        } else if (fsex[1].checked) {

            gênero = 'Mulher'

            if (idade < 12) {
                //criança
                img.setAttribute('src', 'image/fcrianca.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'image/fadolescente.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'image/fadulta.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'image/fidosa.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos que você é ${gênero} com ${idade} anos`
            res.appendChild(img)
        }
    }
}