// Search functionality using Lunr.js
let searchIndex;
let documents;

// Initialize search on page load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initializeSearch();
        setupSearchListeners();
    } catch (error) {
        console.error('Error initializing search:', error);
    }
});

// Fetch and initialize Lunr index
async function initializeSearch() {
    try {
        // Fetch search index
        const response = await fetch('search-index.json');
        const data = await response.json();
        documents = data.documents;

        // Create Lunr index
        searchIndex = lunr(function () {
            this.ref('id');
            this.field('title', { boost: 10 });
            this.field('content');
            this.field('url');

            // Add documents to index
            documents.forEach(doc => {
                this.add(doc);
            });
        });

        console.log('Search index initialized successfully');
    } catch (error) {
        console.error('Error loading search index:', error);
    }
}

// Setup search event listeners
function setupSearchListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.getElementById('searchContainer');

    if (!searchInput || !searchBtn) return;

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearchAndNavigate();
        }
    });

    // Search on button click
    searchBtn.addEventListener('click', performSearchAndNavigate);

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            const resultsDropdown = document.getElementById('searchResults');
            if (resultsDropdown) {
                resultsDropdown.style.display = 'none';
            }
        }
    });
}

// Perform search and navigate to results page
function performSearchAndNavigate() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (!query) {
        alert('Please enter a search query');
        return;
    }

    // Store query in sessionStorage and navigate to search results page
    sessionStorage.setItem('searchQuery', query);
    window.location.href = 'search-results.html';
}

// Display search results on search-results.html page
function displaySearchResults() {
    const queryDisplay = document.getElementById('queryDisplay');
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');

    if (!queryDisplay || !resultsContainer) return;

    // Get query from sessionStorage
    const query = sessionStorage.getItem('searchQuery');

    if (!query) {
        window.location.href = 'index.html';
        return;
    }

    queryDisplay.textContent = query;

    // Perform search using Lunr
    const results = searchIndex.search(query);

    if (results.length === 0) {
        noResults.style.display = 'block';
        resultsContainer.innerHTML = '';
        return;
    }

    // Display results
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const doc = documents.find(d => d.id === result.ref);
        if (doc) {
            const resultItem = createResultElement(doc, query);
            resultsContainer.appendChild(resultItem);
        }
    });
}

// Create individual result element
function createResultElement(doc, query) {
    const item = document.createElement('div');
    item.className = 'search-result-item';

    // Highlight query in content
    const highlightedContent = highlightQuery(doc.content, query);

    item.innerHTML = `
        <div class="result-header">
            <h3><a href="${doc.url}">${doc.title}</a></h3>
        </div>
        <p class="result-excerpt">${highlightedContent}</p>
        <a href="${doc.url}" class="result-link">Read more →</a>
    `;

    return item;
}

// Highlight search query in content
function highlightQuery(text, query) {
    // Escape special regex characters
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    // Extract snippet around query
    const matches = text.matchAll(regex);
    let excerpt = '';

    for (const match of matches) {
        const start = Math.max(0, match.index - 50);
        const end = Math.min(text.length, match.index + match[0].length + 50);
        const snippet = text.substring(start, end);
        excerpt = (start > 0 ? '...' : '') + snippet + (end < text.length ? '...' : '');
        break; // Only show first match
    }

    // If no matches found, get first 150 characters
    if (!excerpt) {
        excerpt = text.substring(0, 150) + '...';
    }

    // Highlight the query in the excerpt
    return excerpt.replace(
        new RegExp(`(${escapedQuery})`, 'gi'),
        '<mark>$1</mark>'
    );
}

// Run on search-results.html page
if (document.location.pathname.includes('search-results.html')) {
    document.addEventListener('DOMContentLoaded', displaySearchResults);
}
