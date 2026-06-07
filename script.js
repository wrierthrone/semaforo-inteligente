function apagarTudo() {

    document.querySelectorAll(".luz")
        .forEach(l => l.classList.remove("ativo"));
}

function analisar() {

    let A = document.getElementById("viaA").checked;
    let B = document.getElementById("viaB").checked;
    let P = document.getElementById("pedestre").checked;

    apagarTudo();

    let binario = "";
    let regra = "";

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