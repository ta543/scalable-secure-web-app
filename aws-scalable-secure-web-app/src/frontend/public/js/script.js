document.addEventListener('DOMContentLoaded', () => {
    console.log('AWS Scalable Secure Web App loaded');

    const loadUsersBtn = document.getElementById('loadUsersBtn');
    const usersList = document.getElementById('usersList');

    async function fetchAndDisplayUsers() {
        try {
            const response = await fetch('https://example.com/api/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    }

    function displayUsers(users) {
        usersList.innerHTML = '';
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.email}`;
            usersList.appendChild(listItem);
        });
    }

    loadUsersBtn.addEventListener('click', fetchAndDisplayUsers);
});
