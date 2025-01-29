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
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time position with competitive salary, health insurance, and opportunities for career growth.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with comprehensive benefits, including paid time off, 401(k), and team leadership training.' }
    ],
    'los-angeles': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time position, evening shifts, tips included, and employee discounts on meals.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible hours with mileage reimbursement and opportunities for bonuses based on performance.' }
    ],
    'chicago': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time available, friendly environment, and tips included.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time position with health benefits, annual bonuses, and professional development opportunities.' }
    ],
    'houston': [
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time position with flexible scheduling, paid vacation, and culinary training programs.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Part-time role with a fuel stipend, flexible hours, and end-of-year bonuses.' }
    ],
    'miami': [
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible hours, weekly pay, and performance-based incentives.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with relocation assistance, retirement plan, and team-building workshops.' }
    ],
    'san-francisco': [
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time position, competitive salary, and profit-sharing opportunities.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with transportation stipend, stock options, and health benefits.' }
    ],
    'portland': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time with morning shifts, tips included, and employee meal discounts.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible hours, eco-friendly vehicle bonuses, and weekly incentives.' }
    ],
    'san-diego': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time role with tips, weekend shifts, and an opportunity to grow into a full-time role.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with health insurance, profit-sharing, and leadership workshops.' }
    ],
    'austin': [
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time position with paid vacation, a supportive work environment, and professional development opportunities.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible schedule, fuel discounts, and performance bonuses.' }
    ],
    'seattle': [
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible schedule, eco-friendly bonuses, and opportunity for overtime pay.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time position with stock options, paid parental leave, and professional development workshops.' }
    ],
    'denver': [
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time role with meal preparation training, competitive wages, and health insurance.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with paid sick leave, team management coaching, and quarterly performance bonuses.' }
    ],
    'washington-dc': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time with high tips, evening shifts, and flexible schedules.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible shifts, mileage reimbursement, and safety training provided.' }
    ],
    'boston': [
        { title: 'Server', description: 'Serve customers.', icon: '🍽️', details: 'Part-time role with tips, employee discounts, and a supportive team environment.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with paid training, health insurance, and annual bonus opportunities.' }
    ],
    'atlanta': [
        { title: 'Chef', description: 'Prepare plant-based meals.', icon: '👨‍🍳', details: 'Full-time role with culinary training, health benefits, and competitive wages.' },
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible hours, weekly pay, and performance bonuses.' }
    ],
    'las-vegas': [
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible schedule, tips, and bonuses for on-time delivery.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with paid time off, retirement plan, and quarterly team-building events.' }
    ],
    'philadelphia': [
        { title: 'Delivery Driver', description: 'Deliver orders.', icon: '🚗', details: 'Flexible shifts, performance incentives, and fuel reimbursement.' },
        { title: 'Manager', description: 'Oversee operations.', icon: '📋', details: 'Full-time with comprehensive benefits, annual bonuses, and career advancement opportunities.' }
    ]
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
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfM6BsyE65WRjKIYPV88o-d7WBJpi5AORD2nO4QyyoJw9z_Jw/viewform?usp=header" class="apply-now">Apply Now</a> 
                </div>
                <div class="job-card-back">
                    <p>${job.details}</p>
                    <button class="flip-back">Back</button>
                </div>
            </div>
        </div>
    `).join('');

    // Highlight the active city button
    const allCityButtons = document.querySelectorAll('.city-selector li');
    allCityButtons.forEach(button => button.classList.remove('active')); 
    const activeButton = document.querySelector(`[data-city="${city}"]`);
    if (activeButton) {
        activeButton.classList.add('active'); 
    }

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

document.addEventListener('DOMContentLoaded', () => {
    const defaultCity = 'new-york'; // Set the default city
    const defaultCityButton = document.querySelector(`[data-city="${defaultCity}"]`);
    
    if (defaultCityButton) {
        defaultCityButton.classList.add('active'); // Highlight the default city button
    }

    loadJobs(defaultCity);
});

function loadJobs(city) {
    const jobs = jobData[city] || [];
    jobsContainer.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-card-inner">
                <div class="job-card-front">
                    <h3>${job.icon} ${job.title}</h3>
                    <p>${job.description}</p>
                    <button class="more-info">More Info</button>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfM6BsyE65WRjKIYPV88o-d7WBJpi5AORD2nO4QyyoJw9z_Jw/viewform?usp=header" class="apply-now">Apply Now</a> 
                </div>
                <div class="job-card-back">
                    <p>${job.details}</p>
                    <button class="flip-back">Back</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add flip functionality for cards
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
}