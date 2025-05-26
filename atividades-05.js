import input from 'readline-sync';

//1

let tab = 1;
let cl = input.questionInt("Digite um número: ");

while (tab <= 10) {
    console.log(cl + " x " + tab + " = " + (cl * tab));
    tab++;
}

//2
let numAlunos= input.questionInt("Informe o numero de alunos da turma: ");

let contAlunos= 1;
let somaMedias = 0;

while(contAlunos<=numAlunos){
    console.log(` Aluno ${contAlunos}`);

    let somaNotas = 0;
    let contBi=1;

    while(contBi <= 4 ){
        let nota = input.question(`Informe a nota do ${contBi}° bimestre do aluno ${contAlunos}: `);
        somaNotas+=nota;
        contBi++;
        }

    let mediaAlunos = somaNotas /4;
    somaMedias += mediaAlunos;
    console.log(`Media do Aluno ${contAlunos}: ${mediaAlunos.toFixed(2)}`);
    contAlunos++;

}
let mediaGeralturma = somaMedias/numAlunos;
console.log(`Média geral da turma: ${mediaGeralturma.toFixed(2)}`);

//3
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = input.questionInt("Tente Adivar quantas pessoas te odeiam no mundo (entre 1 e 100): ")
    if (palpite === numeroAleatorio) {
        console.log("Parabéns Você adivinhou")
    } else if (palpite < numeroAleatorio){
        console.log("Um pouco mais de pessoas, tenta de novo") 
    }else{
        console.log("Não é pra tanto, abaixa um pouquinho")
    }

}while (palpite !== numeroAleatorio);

//4
let imp = 0;
let nome = input.question(`informe o nome da ${i}° pessoa: `)
let salario= input.questionInt(`Informe o seu salario de ${nome}`)

if (salario < 2100){
    imp = 0;
}else if (salario <= 2000){
    imp = salario * 0.075;
}else if (salario <= 3750){
    imp = salario * 0.15;
}else if (salario <= 4660){
    imp = salario * 0.225;
}else{
    imp = salario * 0.275;
}

console.log(`\n--- IMposto de renda a ser pago---`);
console.log(`Nome: ${nome} \n Imposto de renda: R$ ${imp.toFixed(2)}\n`);

//5

const pessoa = {
    nome: "Ana",
    idade: 25,
    sexo: 'M',
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

//6
let cores = ["Azul", "Branco", "verde", "Preto"]

for (let cor of cores) {
    console.log(`cor: ${cor}`)
}