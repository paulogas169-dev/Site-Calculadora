function calcularMedia() {

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const nota4 = Number(document.getElementById("nota4").value);

    const resultado = document.getElementById("resultado");

    if (
        document.getElementById("nota1").value === "" ||
        document.getElementById("nota2").value === "" ||
        document.getElementById("nota3").value === "" ||
        document.getElementById("nota4").value === ""
    ) {
        resultado.innerHTML = `
            <span class="resultado-label">AVISO</span>
            <strong>Preencha todas as notas</strong>
        `;

        return;
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    resultado.innerHTML = `
        <span class="resultado-label">SUA MÉDIA</span>
        <strong>${media.toFixed(2)}</strong>
    `;
}