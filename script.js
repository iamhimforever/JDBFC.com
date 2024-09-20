function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const otherDropdowns = document.querySelectorAll('.dropdown-content');
    
    otherDropdowns.forEach(drop => {
        if (drop.id !== dropdownId) {
            drop.style.display = 'none';
        }
    });

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function setView(viewType) {
    const audioContainer = document.getElementById('song-container');
    const videoContainer = document.getElementById('video-container');

    if (viewType === 'details') {
        audioContainer.classList.add('details-view');
        audioContainer.classList.remove('grid-view');
        videoContainer.classList.add('details-view');
        videoContainer.classList.remove('grid-view');
    } else if (viewType === 'grid') {
        audioContainer.classList.add('grid-view');
        audioContainer.classList.remove('details-view');
        videoContainer.classList.add('grid-view');
        videoContainer.classList.remove('details-view');
    }
}

// Initial view setup
document.addEventListener('DOMContentLoaded', function() {
    setView('details'); // Default view
});
