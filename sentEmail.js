function sendEmail() {
    let emailInput = document.getElementById("email-input");
    let messageInput = document.getElementById("text-email");

    let params = {
        email: emailInput.value,
        message: messageInput.value,
    };
    if (params.email.length > 0 && params.message.length > 0) {
        emailjs
            .send("service_5sv8ux2", "template_cxy13xu", params)
            .then(showToast("Email enviado com sucesso", "text-bg-success"))
            .catch(() => {
                showToast(
                    "Erro ao enviar o e-mail. Tente novamente.",
                    "text-bg-warning"
                );
            });
        emailInput.value = ""
        messageInput.value = ""
    } else {
        showToast(
            "Preencha todos os campos antes de enviar.",
            "text-bg-danger"
        );
    }
}

function showToast(message, type) {
    const toastContainer = document.getElementById("toast-container");

    const newElement = document.createElement("div");
    newElement.innerHTML = `
        <div class="toast align-items-center ${type} border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>`;

    toastContainer.appendChild(newElement);

    // Inicializa o toast do Bootstrap 5
    var toast = new bootstrap.Toast(newElement);
    toast.show();
}
