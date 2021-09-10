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

  msgErro="";
  corErro="red";
  constructor() { }
  ngOnInit(): void {
  }
  
  solicitacaoCadastro(nome: string, CPF: string, nascimento: string, responsavel: string, numBens: any){
    var retorno = this.validaDados(nome,CPF,nascimento,responsavel,numBens);
    /*if(retorno == "Dados de cadastro aprovados"){
      this.msgErro = "Dados Aprovados";
    }
    else{
      this.msgErro = retorno;
    }*/
    this.msgErro = retorno;
  }

  validaDados(nome: string, CPF:string, nascimento: string, responsavel:string, numBens:any)
  {
    
    if (campoNome.valida(nome)==false){
      return "Favor revisar o nome do novo acolhido";
    }
    else if (campoCPF.valida(CPF)==false){
      return "Favor revisar o CPF do acolhido";
    }
    else if (campoNascimento.valida(nascimento)==false){
      return "Data de nascimento é inválida";
    }
    else if (campoNome.valida(responsavel)==false){
      return "Favor revisar o nome do responsável legal";
    }
    else if (numBens<0){
      return "Favor revisar a quantidade de bens";
    }
    else {
      return "Dados de cadastro aprovados";
    }
  }

  enviaDadosParaServidor(nome: string, CPF:string, nascimento: string, responsavel:string, numBens:any){}
  avaliaRespostaServidor(respostaServidor:number){}
}
