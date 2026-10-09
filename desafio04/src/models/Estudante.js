export class Estudante {

    #notas = [];

    constructor(matricula, nome, curso) {
        this.matricula = matricula;
        this.nome = nome;
        this.curso = curso;
    }

    adicionarNota(nota) {

        if (typeof nota !== "number") {
            throw new Error("A nota deve ser numérica");
        }

        if (nota < 0 || nota > 10) {
            throw new Error("A nota deve estar entre 0 e 10");
        }

        this.#notas.push(nota);
    }

    calcularMedia() {

        if (this.#notas.length === 0) {
            return 0;
        }

        const soma = this.#notas.reduce(
            (acumulador, nota) => acumulador + nota,
            0
        );

        return soma / this.#notas.length;
    }

    listarNotas() {
        return [...this.#notas];
    }

    resumo() {
        return {
            matricula: this.matricula,
            nome: this.nome,
            curso: this.curso,
            media: this.calcularMedia()
        };
    }
}