document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    fetch('/api/send_email', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});