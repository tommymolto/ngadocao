export class Localizacao {
    lat: string;
    lon: string;
}

export class Animais {
    id: string;
    nome: string;
    tipo: string;
    imagem: string;
    descricao: string;
    telefone: string;
    localizacao: Localizacao;
}

export class RootObject {
    animais: Animais[];
}
