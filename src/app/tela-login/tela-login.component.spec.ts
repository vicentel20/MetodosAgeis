import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginComponent } from './tela-login.component';

describe('TelaLoginComponent', () => {
  let component: TelaLoginComponent;
  let fixture: ComponentFixture<TelaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /************ Testa a criação dos campos ************/
  it('Testa a criação campo para inserir o nome do acolhido', () => {
    expect(document.getElementById('nome')).toBeTruthy();
  });

  it('Testa a criação campo para inserir o CPF', () => {
    expect(document.getElementById('CPF')).toBeTruthy();
  });

  it('Testa a criação campo para inserir a data de nascimento', () => {
    expect(document.getElementById('nascimento')).toBeTruthy();
  });

  it('Testa a criação campo para inserir o nome do responsavel', () => {
    expect(document.getElementById('responsavel')).toBeTruthy();
  });

  it('Testa a criação campo para inserir o número de bens do acolhido', () => {
    expect(document.getElementById('numBens')).toBeTruthy();
  });

  /************ Testa entradas inválidas para o nome do acolhido ************/
  it('Teste com nome do acolhido em branco', () => {
    expect(component.validaDados("","12345678988","1940-02-15","Maria",'3')).toBe("Favor revisar o nome do novo acolhido");
  });

  it('Teste com nome do acolhido muito curto', () => {
    expect(component.validaDados("A","12345678988","1940-02-15","Maria",'3')).toBe("Favor revisar o nome do novo acolhido");
  });

  it('Teste com nome do acolhido contendo caracteres inválidos', () => {
    expect(component.validaDados("Marcel Aldimir%","12345678988","1940-02-15","Maria",'3')).toBe("Favor revisar o nome do novo acolhido");
  });

  /************ Testa entradas inválidas para o CPF do acolhido ************/
  it('Teste com CPF do idoso em branco', () => {
    expect(component.validaDados("Marcel Aldimir","           ","1940-02-15","Maria",'3')).toBe("Favor revisar o CPF do acolhido");
  });

  it('Teste com CPF do idoso muito curto', () => {
    expect(component.validaDados("Marcel Aldimir","1234567898","1940-02-15","Maria",'3')).toBe("Favor revisar o CPF do acolhido");
  });

  it('Teste com CPF do idoso com código de validação inválido', () => {
    expect(component.validaDados("Marcel Aldimir","34485861024","1940-02-15","Maria",'3')).toBe("Favor revisar o CPF do acolhido");
  });

  /************ Testa entradas de datas de nascimento inválida ************/
  it('Teste com data de nascimento do idoso em branco', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","","Maria",'3')).toBe("Data de nascimento é inválida");
  });

  it('Teste com data de nascimento do idoso inválida', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","1941-02-30","Maria",'3')).toBe("Data de nascimento é inválida");
  });

  /************ Testa entradas inválidas para o campo de reponsaveis legais ************/
  it('Teste com o nome do responsável em branco', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","1940-02-15","",'3')).toBe("Favor revisar o nome do responsável legal");
  });

  it('Teste com o nome do responsável muito curto', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","1940-02-15","A",'3')).toBe("Favor revisar o nome do responsável legal");
  });

  it('Teste com o nome do responsável contendo caracteres inválidos', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","1940-02-15","Ezequel Maciel@",'3')).toBe("Favor revisar o nome do responsável legal");
  });

  /************ Testa entradas de numero de bens  ************/
  it('Teste com quantidade de bens negativos', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","1940-02-15","Ezequel Maciel",'-1')).toBe("Favor revisar a quantidade de bens");
  });

  /************ Testa entradas válidas  ************/
  it('Teste com dados válidos 1', () => {
    expect(component.validaDados("Alfredo Jose","34485861023","1940-02-15","Ezequel Maciel",'1')).toBe("Dados de cadastro aprovados");
  });

  it('Teste com dados válidos 2', () => {
    expect(component.validaDados("Marcel Aldimir","34485861023","1940-02-15","João Rodolfo",'2')).toBe("Dados de cadastro aprovados");
  });

});

