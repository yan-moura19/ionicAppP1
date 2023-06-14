export class produto{
    id: number = 0;
    nome: string = '';
    descricao: string ='';
    quantidade: number = 0 ;
    urlImagem: string ='';
    data: Date = new Date;

    constructor(id: number, nome: string, descricao: string, quantidade: number, urlImagem: string, data: Date )
    {
        this.id= id;
        this.nome= nome;
        this.descricao= descricao;
        this.quantidade = quantidade;
        this.urlImagem = urlImagem;
        this.data = data;
    }
}