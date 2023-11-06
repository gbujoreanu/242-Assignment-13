const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/space_objects", (req, res) => {
    const spaceObjects = [
        {
            name: "Andromeda Galaxy",
            category: "Galaxy",
            distance: "2.537 million light years",
            discoveryYear: "964 AD",
            notableFeatures: [
                "Spiral structure",
                "Brightest galaxy in the sky"
            ],
            img: "images/andromeda.jpg" // Replace with the path to your image
        },
        {
            name: "Orion Nebula",
            category: "Nebula",
            distance: "1,344 light years",
            discoveryYear: "1610",
            notableFeatures: [
                "Star forming region",
                "Visible to the naked eye"
            ],
            img: "images/orion.jpg" // Replace with the path to your image
        },
        {
            name: "Crab Nebula",
            category: "Supernova Remnant",
            distance: "6,523 light years",
            discoveryYear: "1054",
            notableFeatures: [
                "Result of a supernova explosion",
                "Pulsar at the center"
            ],
            img: "images/crab_nebula.jpg" // Replace with the path to your image
        },
        {
            name: "Milky Way Galaxy",
            category: "Galaxy",
            distance: "0 light years (we are here)",
            discoveryYear: "Ancient",
            notableFeatures: [
                "Our home galaxy",
                "Spiral arms and a central bar"
            ],
            img: "images/milky_way.jpg" // Replace with the path to your image
        },
        {
            name: "Pillars of Creation",
            category: "Interstellar Gas and Dust",
            distance: "6,500-7,000 light years",
            discoveryYear: "1995 (Hubble Space Telescope imagery)",
            notableFeatures: [
                "Iconic astronomical feature captured by Hubble",
                "Towering structures of interstellar gas and dust",
                "Star-forming region with newly formed stars"
            ],
            img: "images/pillars_of_creation.png" // Replace with the path to your image
        }        
    ];
    res.json(spaceObjects);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
