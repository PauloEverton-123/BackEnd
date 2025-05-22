import input from 'readline-sync';

//1

let dia = input.question('Digite o dia da semana: ');
switch (dia) {
    case '1':
        console.log('Domingo');
        break
    case '2':
        console.log('Segunda-Feira');
        break
    case '3':
        console.log('Terça-Feira');
        break
    case '4':
        console.log('Quarta-Feira');
        break
    case '5':
        console.log('Quinta-Feira');
        break
    case '6':
        console.log('sexta-Feira');
        break
    case '7':
        console.log('Sabado');
        break

    default:
        console.log('Valor incorreto! \nInforme o valoe de 1 a 7.')
        break
}

//2

//let mes = 11;
let mes = input.question('Digite seu número: ');
switch (mes) {
    case '1':
        console.log('Janeiro');
        break
    case '2':
        console.log('Fevereiro');
        break
    case '3':
        console.log('Março');
        break
    case '4':
        console.log('Abril');
        break
    case '5':
        console.log('Maio');
        break
    case '6':
        console.log('Junho');
        break
    case '7':
        console.log('Julho');
        break
    case '8':
        console.log('Agosto');
        break
    case '9':
        console.log('Setembro');
        break
    case '10':
        console.log('Outubro');
        break
    case '11':
        console.log('Novembro');
        break
    case '12':
        console.log('Dezembro');
        break
    default:
        console.log('Se é burro')
        break
}

//3

let num1 = input.questionInt('Digite um número: ')
let num2 = input.questionInt('Digite outro número: ')
let cal = input.question('Digite a formula do calculo: ')

switch(cal){
    case 'adição':
        console.log(num1+num2)
        break
        case 'subtração':
            console.log(num1-num2)
            break
    case 'multiplicação':
        console.log(num1*num2)
        break
    case 'divisão':
        console.log(num1/num2)
        break
    default:
        console.log('Vc é burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro')
}

//4

let categoria= input.question('Escreva qual a sua classe: A,B,C,D\n')
let sal= input.questionFloat('Digite o seu salario: ')

switch(categoria){
    case 'A':
        console.log(((sal/100)*5)+sal)
        break

    case 'B':
        console.log(((sal/100)*10)+sal)
        break

    case 'C':
        console.log(((sal/100)*15)+sal)
        break

    case 'D':
        console.log(((sal/100)*20)+sal)
        break
    default:
        console.log('Vc é burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro , burro')
}
