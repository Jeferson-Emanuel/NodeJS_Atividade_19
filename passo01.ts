class MecanismoAceleracao{

}

interface Automovel{
    acelerar(): void;
    frear(): void;
    acenderFarol(): void;
};

class Carro implements Automovel{
    private velocidade: number;
    private modelo: string;
    private mecanismoAceleracao: MecanismoAceleracao;
    private cor!: string

    public constructor(modelo: string, mecanismoAceleracao: MecanismoAceleracao){
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao;
        this.velocidade = 0
    };

    public acelerar(): void {

    };    

    public frear(): void {

    };    

    public acenderFarol(): void {

    };
    
    public getVelocidade(): number{
        return this.velocidade;
    };
    private setVelocidade(): void {

    };

    public getModelo(): string{
        return this.modelo;
    };

    public getCor(): string{
        return this.cor;
    };
    public setCor(cor: string): void {
        this.cor = cor;
    };
};

class HondaFit extends Carro{
    public constructor(mecanismoAceleracao: MecanismoAceleracao){
        let modelo = 'HondaFit';
        super(modelo, mecanismoAceleracao);
    };
};