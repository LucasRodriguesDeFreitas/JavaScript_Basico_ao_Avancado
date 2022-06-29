function tratarErro(erro){
    throw new Error('Houve um erro no seu codigo!!')
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('Final')
    }
}

const obj = {
    nome: 'Roberto'
}

imprimirNome(obj)