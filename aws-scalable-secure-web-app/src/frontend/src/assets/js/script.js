document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const contentToToggle = document.getElementById('toggleContent');

    toggleButton.addEventListener('click', function() {
        contentToToggle.classList.toggle('hidden');
    });
});

function showMessage(message) {
    alert(message);
}
