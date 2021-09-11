import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { campoCPF } from './classesCamposFomulario/campoCPF';
import { campoNome } from './classesCamposFomulario/campoNome';
import { campoNascimento } from './classesCamposFomulario/campoNascimento';


@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.component.html'
})

export class TelaDeCadastroComponent implements OnInit {

  //Variável que se comunicam com a interface do usuário
  msgErro="";

  constructor() { }
  ngOnInit(): void {
  }

  //Função chamada ao clicar no botão confirmar, chama validação, futuramente chamará, também, o método que se comunica com o banco de dados
  solicitacaoCadastro(nome: string, CPF: string, nascimento: string, responsavel: string, numBens: any){
    
    var retorno = this.validaDados(nome,CPF,nascimento,responsavel,numBens);
    
    //Futuramente será necessária a segregação do fluxo para chamar a comunicação com o servidor
    /*if(retorno == "Dados de cadastro aprovados"){
      this.msgErro = "Dados Aprovados";
    }
    else{
      this.msgErro = retorno;
    }*/

    //retorna mensagem de erro para a tela de login
    this.msgErro = retorno;
  }


  //Função responsábel por validar os dados de cadastro
  validaDados(nome: string, CPF:string, nascimento: string, responsavel:string, numBens:any)
  {

    //Valida nome do institucionalizado
    if (campoNome.valida(nome)==false){
      return "Favor revisar o nome do novo acolhido";
    }

    //Valida CPF do institucionalizado
    else if (campoCPF.valida(CPF)==false){
      return "Favor revisar o CPF do acolhido";
    }

    //Valida data de nascimento do institucionalizado
    else if (campoNascimento.valida(nascimento)==false){
      return "Data de nascimento é inválida";
    }

    //Valida nome do responsável legal
    else if (campoNome.valida(responsavel)==false){
      return "Favor revisar o nome do responsável legal";
    }

    //Valida nome do responsável legal
    else if (numBens<0){
      return "Favor revisar a quantidade de bens";
    }
    
    //Dados aprovados
    else {
      return "Dados de cadastro aprovados";
    }
  }

  //Métodos a serem implementados futuramente
  enviaDadosParaServidor(nome: string, CPF:string, nascimento: string, responsavel:string, numBens:any){}
  avaliaRespostaServidor(respostaServidor:number){}
}
