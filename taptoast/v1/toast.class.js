class Toast {
    constructor(containerId) {
        this.container = $(`#${containerId}`);
        this.notificacoes = [];
    }

    /**
     * Exibe uma notificação na tela.
     * @param {string} tipo - O tipo da notificação ('erro', 'sucesso', 'atencao' ou vazio '').
     * @param {string} titulo - Titulo da notificações ('Erro!','Sucesso!', 'Atenção!' ou vazio '').
     * @param {string} mensagem - A mensagem da notificação.
     */
    exibir(tipo, titulo, mensagem) {
        const div = $('<div>').addClass('alertaMsg');

        if (tipo === 'erro') {
        div.append(`
            <div class="w3-pale-red w3-text-red w3-padding w3-border w3-border-red w3-round w3-margin-bottom">
            <strong>${titulo}</strong>
            <span>${mensagem}</span>
            </div>
        `);
        } else if (tipo === 'sucesso') {
        div.append(`
            <div class="w3-pale-green w3-text-green w3-padding w3-border w3-border-green w3-round w3-margin-bottom">
            <strong>${titulo}</strong>
            <span>${mensagem}</span>
            </div>
        `);
        } else if (tipo === 'atencao') {
            div.append(`
            <div class="w3-pale-yellow w3-text-yellow w3-padding w3-border w3-border-yellow w3-round w3-margin-bottom">
            <strong>${titulo}</strong>
            <span>${mensagem}</span>
            </div>
        `);
        } else {
            div.append(`
            <div class="w3-white w3-padding w3-border w3-round w3-margin-bottom">
            <strong>${titulo}</strong>
            <span>${mensagem}</span>
            </div>
        `);
        }

        this.container.append(div);
        this.notificacoes.push(div);

        setTimeout(() => {
        div.fadeOut(500, () => {
            div.remove();
            this.notificacoes.shift();
        });
        }, 5000);
    }
}
const toast = new Toast('msgbox');