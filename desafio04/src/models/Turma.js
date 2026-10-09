import { VinculoNaTurma } from "./VinculoNaTurma.js";

export class Turma {

    #vinculos = [];

    constructor(codigo, componenteCurricular) {
        this.codigo = codigo;
        this.componenteCurricular = componenteCurricular;
    }

    matricular(estudante) {

        const jaMatriculado =
            this.#vinculos.some(
                vinculo =>
                    vinculo.estudante.matricula ===
                    estudante.matricula
            );

        if (jaMatriculado) {
            throw new Error(
                "Estudante já matriculado nesta turma"
            );
        }

        const vinculo =
            new VinculoNaTurma(estudante);

        this.#vinculos.push(vinculo);

        return vinculo;
    }

    listarMatriculados() {

        return this.#vinculos.map(vinculo => ({
            matricula:
                vinculo.estudante.matricula,

            nome:
                vinculo.estudante.nome,

            dataEntrada:
                vinculo.dataEntrada,

            frequencia:
                vinculo.frequencia
        }));
    }

    resumo() {
        return {
            codigo: this.codigo,
            componenteCurricular:
                this.componenteCurricular,
            quantidadeMatriculados:
                this.#vinculos.length
        };
    }
}