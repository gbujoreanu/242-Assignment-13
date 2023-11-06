const showSpaceObjects = async () => {
    const objectsJSON = await getSpaceObjects();
    const spaceObjectsDiv = document.getElementById("space-objects-div");

    if (!objectsJSON) {
        console.error("Invalid load of JSON");
        return;
    }

    objectsJSON.forEach((object) => {
        const section = document.createElement("section");
        spaceObjectsDiv.append(section);

        const h2 = document.createElement("h2");
        h2.textContent = object.name;
        section.append(h2);

        const category = document.createElement("p");
        category.textContent = `Category: ${object.category}`;
        section.append(category);

        const distance = document.createElement("p");
        distance.textContent = `Distance: ${object.distance}`;
        section.append(distance);

        const discoveryYear = document.createElement("p");
        discoveryYear.textContent = `Discovered: ${object.discoveryYear}`;
        section.append(discoveryYear);

        const notableFeatures = document.createElement("ul");
        object.notableFeatures.forEach(feature => {
            const featureItem = document.createElement("li");
            featureItem.textContent = feature;
            notableFeatures.appendChild(featureItem);
        });
        section.append(notableFeatures);

        const img = document.createElement("img");
        img.src = object.img || "path_to_default_space_image.jpg"; // Use a default image if none provided
        img.alt = `Image of ${object.name}`;
        section.append(img);
    });
};

const getSpaceObjects = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/space_objects');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error retrieving JSON", error);
        return null;
    }
}

window.onload = () => showSpaceObjects();
