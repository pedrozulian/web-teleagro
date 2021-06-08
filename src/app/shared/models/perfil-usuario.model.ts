import { Deserializable } from "./deserializable.model";

export class PerfilUsuario implements Deserializable {
    nome?: string;
    nome_usuario?: string;
    foto?: string;
    cidade?: string;
    uf?: string;
    email?: string;

    deserialize(input: unknown): this {
        return Object.assign(this, input);
    }
}