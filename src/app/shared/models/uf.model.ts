import { Deserializable } from "./deserializable.model";

export class UF implements Deserializable {
    id?: number;
    sigla?: string;
    nome?: string;

    deserialize(input: unknown): this {
        return Object.assign(this, input);
    }
}