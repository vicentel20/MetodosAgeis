export class campoNascimento {
    constructor() {

    }

    public static valida(nascimento: string): boolean {
        if (nascimento.length!=10){
            return false;
        }
        

        var Ano: number = +nascimento.substring(0, 4);
        let Mes: number = +nascimento.substring(5, 7);
        let Dia: number = +nascimento.substring(8, 10);

        if (Mes == 1 || Mes == 3 || Mes == 5 || Mes == 7 || Mes == 8 || Mes == 10 || Mes == 12){
            return true;
        }
        else if ( Mes == 2 && ( (Dia == 29 && (Ano%4)==0 ) || Dia<=28) ){
            return true;
        }
        else if (Dia<=30){
            return true;
        }
        else {
            return false;
        }
    }
}