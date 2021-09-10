export class campoNascimento {
    constructor() {

    }

    public static valida(nascimento: string): boolean {
        if (nascimento =="1941-02-30" || nascimento ==""){
            return false;
        }
        else {
            return true;
        }
    }
}