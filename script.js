const photos = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
];
let currentPhotos = [];
let photoIndex = 0;
const photosPerPage = 6;

// Function to display photos
function displayPhotos(photosToShow) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear gallery
    photosToShow.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.url;
        allphotos= photos; 
        gallery.appendChild(img);
    });
}

// Function to load the next 6 photos
function loadMorePhotos() {
    const nextPhotos = photos.slice(photoIndex, photoIndex + photosPerPage);
    currentPhotos = currentPhotos.concat(nextPhotos);
    displayPhotos(currentPhotos);
    photoIndex += photosPerPage;
    if (photoIndex >= photos.length) {
        document.getElementById('loadMore').style.display = 'none';
    }
}

function filterPhotos(type) {
    currentPhotos = [];
    photoIndex = 0;
    document.getElementById('loadMore').style.display = 'block';
    if (type === 'all') {
        currentPhotos = photos.slice(0, photosPerPage);
        photoIndex = photosPerPage;
    } else {
        currentPhotos = photos.filter(photo => photo.type === type);
    }
    displayPhotos(currentPhotos);
}

document.getElementById('all').addEventListener('click', () => filterPhotos('all'));
document.getElementById('nature').addEventListener('click', () => filterPhotos('nature'));
document.getElementById('city').addEventListener('click', () => filterPhotos('city'));
document.getElementById('animals').addEventListener('click', () => filterPhotos('animals'));

document.getElementById('loadMore').addEventListener('click', loadMorePhotos);

// Load initial set of photos when the page loads
window.onload = function() {
    filterPhotos('all');
};