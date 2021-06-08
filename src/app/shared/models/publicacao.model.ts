import { Deserializable } from "./deserializable.model";

export class Publicacao implements Deserializable {
    id_publicacao?: number;
    id_tipo_imagem?: number;
    id_usuario?: number;
    foto_usuario?: string;
    nome_usuario?: string;
    texto?: string;
    url?: string;

    deserialize(input: unknown): this {
        return Object.assign(this, input);
    }
}