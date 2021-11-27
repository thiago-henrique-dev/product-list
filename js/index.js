class Produto {

    constructor(){

        this.id = 1;
        this.arrayProdutos = [];
        
    }

    salvar(){
        let produto = this.lerDados();
        this.validaCampos(produto)
        if(this.validaCampos(produto)){
            this.adicionar(produto)
        }
            console.log(this.arrayProdutos)
    }
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++

    }


    lerDados(){
        let produto = {}
            produto.id = this.id;
            produto.nomeProduto = document.getElementById('produto').value
            produto.preço = document.getElementById('preço').value
        
            return produto;
        
    }

    validaCampos(produto){
        let msg = "";
        if(produto.nomeProduto == ""){
            msg += "Informe o nome do produto \n"
        }
        if(produto.preço == ""){
            msg += "Informe o preço do produto \n"
        }
        if(msg != ""){
            alert(msg);
            return false;
        }
        return true;

    }

    cancelar(){
        


    }

}

var produto = new Produto()