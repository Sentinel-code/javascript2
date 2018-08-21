let Idade = Number (prompt("Digite aqui sua idade"));
let ValorDoEmprestimo = Number (prompt("Qual o valor do Empréstimo"));
let Renda = Number (prompt("Qual sua renda"));
let NumeroDeParcela;
let JurosDoEmprestimo;
if (Idade>=21 && Idade<=60 && Renda >=1500 && ValorDoEmprestimo >=1000 && ValorDoEmprestimo <(20*Renda))
{
    alert ("Empréstimo liberado com sucesso");
    NumeroDeParcela = Number (prompt("Digite o numero de parcelas"));
    JurosDoEmprestimo = 0.06*ValorDoEmprestimo;
    alert (ValorDoEmprestimo + (NumeroDeParcela*JurosDoEmprestimo));
}
else{
    alert ("Empréstimo Recusado");
}