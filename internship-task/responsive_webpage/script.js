function performSearch() {
    // Get the search term from the input field
    const searchTerm = document.getElementById('search').value.toLowerCase();

    // Get the content div and its paragraphs
    const contentDiv = document.getElementById('content');
    const paragraphs = contentDiv.getElementsByTagName('p');

    let found = false;

    // Clear any previous highlights
    clearHighlights();

    // Iterate through paragraphs to find and highlight the search term
    for (let para of paragraphs) {
        const text = para.textContent.toLowerCase();
        const index = text.indexOf(searchTerm);
        if (index !== -1) {
            highlightText(para, searchTerm);
            para.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
            break; // Scroll to the first occurrence only
        }
    }

    if (!found) {
        alert('No results found');
    }
}

function clearHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.outerHTML = element.innerHTML; // Remove the span but keep the text
    });
}

function highlightText(element, searchTerm) {
    const innerHTML = element.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(searchTerm);
    if (index >= 0) {
        element.innerHTML = innerHTML.substring(0, index) + 
            '<span class="highlight">' + innerHTML.substring(index, index + searchTerm.length) + '</span>' + 
            innerHTML.substring(index + searchTerm.length);
    }
}
