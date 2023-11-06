const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Respond with 'index.html' when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for serving space objects JSON data
app.get('/api/space_objects', (req, res) => {
    const spaceObjects = [
        {
            name: 'Andromeda Galaxy',
            category: 'Galaxy',
            distance: '2.537 million light years',
            discoveryYear: '964 AD',
            notableFeatures: ['Spiral structure', 'Brightest galaxy in the sky'],
            img: 'images/andromeda.jpg',
        },
        {
            name: 'Orion Nebula',
            category: 'Nebula',
            distance: '1,344 light years',
            discoveryYear: '1610',
            notableFeatures: ['Star forming region', 'Visible to the naked eye'],
            img: 'images/orion.jpg',
        },
        {
            name: 'Crab Nebula',
            category: 'Supernova Remnant',
            distance: '6,523 light years',
            discoveryYear: '1054',
            notableFeatures: ['Result of a supernova explosion', 'Pulsar at the center'],
            img: 'images/crab_nebula.jpg',
        },
        {
            name: 'Milky Way Galaxy',
            category: 'Galaxy',
            distance: '0 light years (we are here)',
            discoveryYear: 'Ancient',
            notableFeatures: ['Our home galaxy', 'Spiral arms and a central bar'],
            img: 'images/milky_way.jpg',
        },
        {
            name: 'Pillars of Creation',
            category: 'Interstellar Gas and Dust',
            distance: '6,500-7,000 light years',
            discoveryYear: '1995 (Hubble Space Telescope imagery)',
            notableFeatures: [
                'Iconic astronomical feature captured by Hubble',
                'Towering structures of interstellar gas and dust',
                'Star-forming region with newly formed stars',
            ],
            img: 'images/pillars_of_creation.png',
        },
    ];

    res.json(spaceObjects);
});

// Listen on the specified PORT, or default to port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});