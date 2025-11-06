document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        // Make AJAX request using fetch API
        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Exercise 2: Show alert with the list
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error fetching superhero data');
            });
    });
});