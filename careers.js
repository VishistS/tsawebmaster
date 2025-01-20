const carouselContainer = document.getElementById('carouselContainer');
        let carouselIndex = 0;

        document.getElementById('next').addEventListener('click', () => {
            carouselIndex = (carouselIndex + 1) % carouselContainer.children.length;
            updateCarousel();
        });

        document.getElementById('prev').addEventListener('click', () => {
            carouselIndex = (carouselIndex - 1 + carouselContainer.children.length) % carouselContainer.children.length;
            updateCarousel();
        });

        function updateCarousel() {
            const width = carouselContainer.children[0].offsetWidth;
            carouselContainer.style.transform = `translateX(-${carouselIndex * width}px)`;
        }

        const careersData = {
            newyork: [
                { title: "Chef", description: "Prepare plant-based meals." },
                { title: "Manager", description: "Oversee daily operations." }
            ],
            losangeles: [
                { title: "Barista", description: "Craft vegan beverages." },
                { title: "Server", description: "Provide excellent customer service." }
            ],
            chicago: [
                { title: "Cleaner", description: "Maintain cleanliness." },
                { title: "Host", description: "Greet and seat guests." }
            ]
        };

        function showCareers() {
            const location = document.getElementById('location').value;
            const careersAvailable = document.getElementById('careersAvailable');
            careersAvailable.innerHTML = '';

            if (careersData[location]) {
                careersData[location].forEach(career => {
                    const careerItem = document.createElement('div');
                    careerItem.classList.add('career-item');
                    careerItem.innerHTML = `
                        <h4>${career.title}</h4>
                        <button onclick="displayMoreInfo('${career.title}', '${career.description}')">More Info</button>
                        <button onclick="alert('Application form for ${career.title}')">Apply Now</button>
                    `;
                    careersAvailable.appendChild(careerItem);
                });
            }
        }

        function displayMoreInfo(title, description) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDescription').innerText = description;
            document.getElementById('modalOverlay').style.display = 'block';
            document.getElementById('careerModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modalOverlay').style.display = 'none';
            document.getElementById('careerModal').style.display = 'none';
        }