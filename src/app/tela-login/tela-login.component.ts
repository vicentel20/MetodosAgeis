import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { campoCPF } from './classesCamposFomulario/campoCPF';
import { campoNome } from './classesCamposFomulario/campoNome';
import { campoNascimento } from './classesCamposFomulario/campoNascimento';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.less']
})

export class TelaLoginComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  
  validaDados(nome: string, CPF:string, nascimento: string, responsavel:string, numBens:number)
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

  enviaDadosParaServidor(nome: string, CPF:string, nascimento: string, responsavel:string, numBens:number){}
  avaliaRespostaServidor(respostaServidor:number){}
}
