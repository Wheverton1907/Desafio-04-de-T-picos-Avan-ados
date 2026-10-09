export class VinculoNaTurma {

    constructor(estudante) {
        this.estudante = estudante;
        this.dataEntrada = new Date();
        this.frequencia = 0;
    }

    atualizarFrequencia(frequencia) {

        if (frequencia < 0 || frequencia > 100) {
            throw new Error(
                "A frequência deve estar entre 0 e 100"
            );
        }

        this.frequencia = frequencia;
    }

}