export class FilaAtendimento {

    #chamados = [];

    adicionar(chamado) {
        this.#chamados.push(chamado);
    }

    proximo() {

        if (this.#chamados.length === 0) {
            return null;
        }

        return this.#chamados.shift();
    }

    tamanho() {
        return this.#chamados.length;
    }

    relatorio() {

        return this.#chamados.map(
            chamado => ({
                id: chamado.id,
                titulo: chamado.titulo,
                status:
                    chamado.getStatus()
            })
        );
    }
}