document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cotacao-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch('https://app.pipe.run/webservice/integradorJson?hash=ec918f64-9d27-11ef-aea4-fe5754e413df', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                Toastify({
                    text: "Cadastro realizado com sucesso!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "#4CAF50",
                    }
                }).showToast();
                
                
                form.reset();
                window.location.href = 'obrigado.html';
            })
            .catch(error => {
                Toastify({
                    text: "Erro ao enviar formulário. Por favor, tente novamente.",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "#f44336",
                    }
                }).showToast();
                
                console.error('Error:', error);
            });
        });
    }
}); 