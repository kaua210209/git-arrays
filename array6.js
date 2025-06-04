let pessoa = {
    nome: 'Peter Parker',
    DataDeNascimento: '25/05/1997',
    responsavel: {
        Nome: 'May Parker',
        idade: 40
    },
    cidadeNascimento: 'Queens',
    estadoNascimento: 'Nova Iorque',
    Filiação: 'Avengens'
};
pessoa.responsavel.id = '258741369';
pessoa.profissão = 'Estudante';
pessoa.responsavel.profissão = 'Aposentado';

console.log(pessoa);