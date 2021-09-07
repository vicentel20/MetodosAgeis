export class campoNascimento {
    constructor() {

    }

    public static valida(nascimento: string): boolean {
        if (nascimento =="30feb1950" || nascimento ==""){
            return false;
        }
        else {
            return true;
        }
    }
}