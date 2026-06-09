let estadoAtual = 0;
let timerAutomatico = null;

function apagarTudo() {

    document.querySelectorAll(".luz")
        .forEach(l => l.classList.remove("ativo"));
}

function iniciarModoAutomatico() {

    if (timerAutomatico) return;

    executarEstado();
}

function executarEstado() {

    apagarTudo();

    let duracao;

    switch (estadoAtual) {

        // Via A Verde
        case 0:
            document.getElementById("a-verde")
                .classList.add("ativo");

            document.getElementById("b-vermelho")
                .classList.add("ativo");

            duracao = 5000;
            estadoAtual = 1;
            break;

        // Via A Amarelo
        case 1:
            document.getElementById("a-amarelo")
                .classList.add("ativo");

            document.getElementById("b-vermelho")
                .classList.add("ativo");

            duracao = 2000;
            estadoAtual = 2;
            break;

        // Via B Verde
        case 2:
            document.getElementById("a-vermelho")
                .classList.add("ativo");

            document.getElementById("b-verde")
                .classList.add("ativo");

            duracao = 5000;
            estadoAtual = 3;
            break;

        // Via B Amarelo
        case 3:
            document.getElementById("a-vermelho")
                .classList.add("ativo");

            document.getElementById("b-amarelo")
                .classList.add("ativo");

            duracao = 2000;
            estadoAtual = 0;
            break;
    }

    timerAutomatico = setTimeout(executarEstado, duracao);
}

function pararModoAutomatico() {

    clearTimeout(timerAutomatico);
    timerAutomatico = null;
}

function analisar() {

    let A = document.getElementById("viaA").checked;
    let B = document.getElementById("viaB").checked;
    let P = document.getElementById("pedestre").checked;

    pararModoAutomatico();

    apagarTudo();

    let binario = "";
    let regra = "";
    if (!A && !B && !P) {

        iniciarModoAutomatico();

        document.getElementById("binario").textContent =
            "Modo Automático";

        document.getElementById("regra").textContent =
            "Ciclo temporizado";

        return;
    }

    if (P) {

        document
            .getElementById("a-vermelho")
            .classList.add("ativo");

        document
            .getElementById("b-vermelho")
            .classList.add("ativo");

        binario = "111";
        regra = "P → Prioridade ao Pedestre";

    }
    else if (A && !B) {

        document
            .getElementById("a-verde")
            .classList.add("ativo");

        document
            .getElementById("b-vermelho")
            .classList.add("ativo");

        binario = "100";
        regra = "A ∧ ¬B";

    }
    else if (!A && B) {

        document
            .getElementById("b-verde")
            .classList.add("ativo");

        document
            .getElementById("a-vermelho")
            .classList.add("ativo");

        binario = "010";
        regra = "B ∧ ¬A";

    }
    else if (A && B) {

        document
            .getElementById("a-amarelo")
            .classList.add("ativo");

        document
            .getElementById("b-amarelo")
            .classList.add("ativo");

        binario = "110";
        regra = "A ∧ B";

    }
    else {

        document
            .getElementById("a-verde")
            .classList.add("ativo");

        document
            .getElementById("b-vermelho")
            .classList.add("ativo");

        binario = "000";
        regra = "Estado padrão";
    }

    document.getElementById("binario").textContent = binario;
    document.getElementById("regra").textContent = regra;
}

window.onload = () => {
    iniciarModoAutomatico();
};