export class campoNome {

    constructor() {
    }

    public static valida(nome: string): boolean {
        
        if (nome == null) {
            return false;
        }

        else if (nome.length < 7) {
            return false;
        }
        
        let letraNome: string = '';
        let letraAux = nome.substring(0, nome.length);

        for (let i: number = 0; i < nome.length; i++) {
            letraNome = letraAux.charAt(i);
            if (((letraNome>='a' && letraNome<='z')||(letraNome>='A' && letraNome<='Z')||letraNome==" "||letraNome=="ã"||letraNome=="õ")==false) {
                return false;
            }
        }

        return true;
    }
}