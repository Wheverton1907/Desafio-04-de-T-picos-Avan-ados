export class Chamado {

    #status = "ABERTO";

    constructor(id, titulo, solicitante) {

        this.id = id;
        this.titulo = titulo;
        this.solicitante = solicitante;
        this.responsavel = null;
    }

    iniciarAtendimento(responsavel) {

        if (this.#status !== "ABERTO") {
            throw new Error(
                "Somente chamados abertos podem iniciar atendimento"
            );
        }

        this.responsavel = responsavel;
        this.#status = "EM_ATENDIMENTO";
    }

    finalizar() {

        if (
            this.#status !== "EM_ATENDIMENTO"
        ) {
            throw new Error(
                "Somente chamados em atendimento podem ser finalizados"
            );
        }

        this.#status = "FINALIZADO";
    }

    getStatus() {
        return this.#status;
    }

    resumo() {
        return {
            id: this.id,
            titulo: this.titulo,
            status: this.#status,
            solicitante:
                this.solicitante.nome,
            responsavel:
                this.responsavel
        };
    }
}