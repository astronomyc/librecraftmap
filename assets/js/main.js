fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        const mapData = data;

        const nameMapElement = document.getElementById("nameMap");
        const imageMapElement = document.getElementById("imageMap");
        const descriptionMapElement = document.getElementById("descriptionMap");
        const flyMapElement = document.getElementById("flyMap");
        const infoElement = document.getElementById("info");

        function updateInfo(data) {
            nameMapElement.textContent = data.name;
            imageMapElement.src = "assets/images/" + data.imagesrc;
            descriptionMapElement.textContent = data.description;
            flyMapElement.textContent = data.fly;
            infoElement.style.display = "block";
        }

        Object.keys(mapData).forEach(function (key) {
            const element = document.getElementById(key);
            element.addEventListener("click", function () {
                updateInfo(mapData[key]);
            });
        });
    });