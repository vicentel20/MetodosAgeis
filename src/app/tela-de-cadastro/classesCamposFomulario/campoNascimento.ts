export class campoNascimento {
    constructor() {

    }

    public static valida(nascimento: string): boolean {
        alert("'" + nascimento + "'")
        //Valida se o número de caracteres da data está correto
        if (nascimento.length!=10){
            return false;
        }
        
        //Salva o dia, o ano e o mes
        let Ano: number = +nascimento.substring(0, 4);
        let Mes: number = +nascimento.substring(5, 7);
        let Dia: number = +nascimento.substring(8, 10);

        //Verifica se o mes é de 31 dias (campo não aceita números maiores que 31)
        if (Mes == 1 || Mes == 3 || Mes == 5 || Mes == 7 || Mes == 8 || Mes == 10 || Mes == 12){
            return true;
        }
        //Verifica se a data é em fevereiro e se é válida
        else if ( Mes == 2 && ( (Dia == 29 && (Ano%4)==0 ) || Dia<=28) ){
            return true;
        }
        //Demais meses possuem pelo menos 30 dias
        else if (Dia<=30 && Mes !=2){
            return true;
        }
        //Se não se enquadrar em nenhuma das situações anteriores, retorna falso
        else {
            return false;
        }
    }
}