import { Estudante }
    from "./models/Estudante.js";

import { Turma }
    from "./models/Turma.js";

import { Chamado }
    from "./models/Chamado.js";

import { FilaAtendimento }
    from "./models/FilaAtendimento.js";

console.log("=== ESTUDANTES ===\n");

const estudante1 =
    new Estudante(
        "2024001",
        "João Silva",
        "ADS"
    );

const estudante2 =
    new Estudante(
        "2024002",
        "Maria Souza",
        "ADS"
    );

estudante1.adicionarNota(8);
estudante1.adicionarNota(9);

estudante2.adicionarNota(7);
estudante2.adicionarNota(10);

console.log(estudante1.resumo());
console.log(estudante2.resumo());

console.log(
    "\nNotas João:",
    estudante1.listarNotas()
);

console.log(
    "Notas Maria:",
    estudante2.listarNotas()
);

console.log("\n=== TURMA ===\n");

const turma =
    new Turma(
        "POO2024",
        "Programação Orientada a Objetos"
    );

const vinculo1 =
    turma.matricular(estudante1);

const vinculo2 =
    turma.matricular(estudante2);

vinculo1.atualizarFrequencia(95);
vinculo2.atualizarFrequencia(90);

console.log(turma.resumo());

console.log(
    turma.listarMatriculados()
);

console.log("\n=== CHAMADOS ===\n");

const chamado1 =
    new Chamado(
        1,
        "Erro no Portal",
        estudante1
    );

const chamado2 =
    new Chamado(
        2,
        "Problema na Matrícula",
        estudante2
    );

console.log(chamado1.resumo());
console.log(chamado2.resumo());

console.log("\n=== FILA ===\n");

const fila =
    new FilaAtendimento();

fila.adicionar(chamado1);
fila.adicionar(chamado2);

console.log(
    "Tamanho da fila:",
    fila.tamanho()
);

console.log(
    "Fila atual:",
    fila.relatorio()
);

const proximo =
    fila.proximo();

console.log(
    "\nChamado retirado da fila:"
);

console.log(
    proximo.resumo()
);

proximo.iniciarAtendimento(
    "Carlos Técnico"
);

console.log(
    "\nApós iniciar atendimento:"
);

console.log(
    proximo.resumo()
);

proximo.finalizar();

console.log(
    "\nApós finalizar:"
);

console.log(
    proximo.resumo()
);

console.log(
    "\nFila restante:"
);

console.log(
    fila.relatorio()
);

console.log(
    "Tamanho final:",
    fila.tamanho()
);