// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Job cards functionality
const citySelector = document.querySelector('.city-selector ul');
const jobsContainer = document.getElementById('jobs-container');

const jobData = {
    'new-york': [
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time position.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with benefits.' }
    ],
    'los-angeles': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time available.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible hours.' }
    ],
    // Add more cities and jobs as needed
};

citySelector.addEventListener('click', (e) => {
    const city = e.target.dataset.city;
    if (!city) return;

    const jobs = jobData[city] || [];
    jobsContainer.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-card-inner">
                <div class="job-card-front">
                    <h3>${job.icon} ${job.title}</h3>
                    <p>${job.description}</p>
                    <button class="more-info">More Info</button>
                    <button class="apply-now">Apply Now</button>
                </div>
                <div class="job-card-back">
                    <p>${job.details}</p>
                    <button class="flip-back">Back</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add flip functionality
    const cards = document.querySelectorAll('.job-card');
    cards.forEach(card => {
        const moreInfoBtn = card.querySelector('.more-info');
        const flipBackBtn = card.querySelector('.flip-back');
        const innerCard = card.querySelector('.job-card-inner');

        moreInfoBtn.addEventListener('click', () => {
            card.classList.add('flipped');
        });

        flipBackBtn.addEventListener('click', () => {
            card.classList.remove('flipped');
        });
    });
});