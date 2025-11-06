document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');

    // Q3: Added search input and result div variables
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        
        // Q3: Added loading state
        resultDiv.innerHTML = '<div class="loading">Searching...</div>';
        
        // Q3: Modified fetch URL to include query parameter with encoding
        fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Q3: Only show alert for specific searches, not empty ones
                if (query !== '') {
                    alert(data);  // Keep alert only for specific searches
                }
                
                displayResults(data, query);
            })
            .catch(error => {
                console.error('Error:', error);
                // Q2: Keep alert for errors
                alert('Error fetching superhero data');
                resultDiv.innerHTML = '<div class="error-message">Error fetching data. Please try again.</div>';
            });
    });

     // Q3: Handle search results display
    function displayResults(data, query) {
        if (data.includes('Superhero not found')) {
            resultDiv.innerHTML = '<div class="error-message">SUPERHERO NOT FOUND</div>';
        } else if (query === '') {
            resultDiv.innerHTML = data;
        } else {
            resultDiv.innerHTML = `<div class="superhero-detail">${data}</div>`;
        }
    }

    //Allow searching by pressing Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});
