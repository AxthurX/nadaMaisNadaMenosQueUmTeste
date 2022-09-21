async function buscaEndereco(cep) {
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPFormatado = await consultaCEP.json()
    if (consultaCEPFormatado.erro) {
      throw Error('Cep não existente!')
    }
    let cidade = document.getElementById('cidade')
    let logradouro = document.getElementById('endereco')
    let bairro = document.getElementById('bairro')
    let estado = document.getElementById('estado')

    cidade.value = consultaCEPFormatado.localidade
    logradouro.value = consultaCEPFormatado.logradouro
    bairro.value = consultaCEPFormatado.bairro
    estado.value = consultaCEPFormatado.uf

    console.log(consultaCEPFormatado)
    return consultaCEPFormatado

  } catch (erro) {
    console.log(erro)
  }
}

let cep = document.getElementById("cep")
cep.addEventListener('blur', () => buscaEndereco(cep.value))



/*
  let ceps = [01001001, 01001000]
  const conjuntoCeps = ceps.map(valores =>  buscaEndereco(valores));
  Promise.all(conjuntoCeps).then(resposta => console.log(resposta))

============================================================================================================================================

let consultaCep = fecth('https://viacep.com.br/ws/01001000/json/')
  .then(resposta => resposta.json())
  .then(respostaConvertida => {
    if (respostaConvertida.erro) {
      thow new error('esse cep não existe!')
    } else {
      console.log(respostaConvertida)
  }})
  .catch(erro => console.log(erro))
  .finally(mensagem => console.log('Processamento concluido!'))

  console.log(consultaCep)

  */