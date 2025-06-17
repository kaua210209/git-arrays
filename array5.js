let pessoa = {nome: 'Alice Smith',
    idade: 30,
    endereço: {rua: '123 Main St',
        cidade: 'Springfield',
        cep: '12345'
    }
};

pessoa.endereço.cidade= 'Muriaé'
pessoa.endereço.cep = 36892000
pessoa.idade= 17
pessoa.nome= 'Vitória'
pessoa.endereço.rua= 'Rua joaquim Teodoro Da Silva'

console.log('FichaCompleta:', pessoa);