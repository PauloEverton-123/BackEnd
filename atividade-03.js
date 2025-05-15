// atividade 1
let apartamento = {
    quartos: 2,
    tipo: 'apartamento',
    endereco: 'Avenida Principal, 456 - Centro' ,
    andar: 7
};
let casa = (apartamento.tipo + ' com ' + apartamento.quartos + ' quartos, localizado no ' + apartamento.andar+'° andar da '+  apartamento.endereco);

console.log(casa)

//atividade 2
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
};

let resul = ('O produto ' + produtoEmbalado.nome + ', da categoria ' + produtoEmbalado.categoria + ' pesando ' + produtoEmbalado.peso + ' kg está à venda por R$ ' + produtoEmbalado.preco);

console.log(resul)

//atividade 3

class Imóvel{
    constructor(quartos,tipo,endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    
    exibirInformacoes(){
    return ` Tipo = ${this.tipo}\n Quartos: ${this.quartos}\n Endereço: ${this.endereco}`
    };
    }
    const Casa = new Imóvel( 4,"Casa","Rua da amizade,729 - Bairro Alegre");


    const Apartamento = new Imóvel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
    
    console.log(Casa.exibirInformacoes());
    
    console.log(Apartamento.exibirInformacoes());
    
    
// aividade 04
    
class Veiculo{
    constructor(marca,modelo,ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    exibirDetalhes(){
    return` Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano}`
    };
    }
    
    const Carro = new Veiculo("Toyota", "Corolla",2022 );
    
    const Motocicleta = new Veiculo("Honda","CBR 600RR", 2021);
    
    console.log(Carro.exibirDetalhes());
    
    console.log(Motocicleta.exibirDetalhes());
