export class campoNome {

    constructor() {
    }

    public static valida(nome: string): boolean {
        
        // Verifica se nome está em branco
        if (nome == null) {
            return false;
        }

        // Verifica se nome é maior do que 7 caracteres (Evitar que somente o 1° nome seja inserido)
        else if (nome.length < 7) {
            return false;
        }
        
        //Varre nome validandos se os caracteres são válidos
        let letraNome: string = '';
        let letraAux = nome.substring(0, nome.length);

        //Varre nome validandos se os caracteres são válidos
        for (let i: number = 0; i < nome.length; i++) {
            letraNome = letraAux.charAt(i);
            if (((letraNome>='a' && letraNome<='z')||(letraNome>='A' && letraNome<='Z')||letraNome==" "||letraNome=="ã"||letraNome=="õ"||letraNome=="á"||letraNome=="é"||letraNome=="í"||letraNome=="ó"||letraNome=="ú"||letraNome=="ô"||letraNome=="â")==false) {
                return false;
            }
        }

        //Caso nenhuma inconsistência tenha sido encontrada, retorna verdadeiro
        return true;
    }
}