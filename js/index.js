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
           this.listaTabela();
           this.cancelar();
    }
    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';
        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preço
            
            td_id.classList.add('center')

            let imgEdit = document.createElement('img');
            let imgDelete = document.createElement('img')
            imgEdit.src = "img/baseline_delete_black_24dp.png"
            imgDelete.src = 'img/outline_edit_black_24dp.png'
            


            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDelete)

        }


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
        document.getElementById('produto').value = '';
        document.getElementById('preço').value = '';
        


    }

}

var produto = new Produto()