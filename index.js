// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    //1
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', smoothScroll);
    }

    //2
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    //3.Skills
    const categories = document.querySelectorAll('.skills-navbar li');
    const skillCategories = document.querySelectorAll('.skill-category');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            // Remove 'active' class from all categories
            categories.forEach(cat => cat.classList.remove('active'));

            // Add 'active' class to the clicked category
            this.classList.add('active');

            // Hide all skill categories
            skillCategories.forEach(category => {
                category.classList.remove('active');
            });

            // Show the selected skill category
            const selectedSkillCategory = document.querySelector(`.${this.dataset.category}`);
            selectedSkillCategory.classList.add('active');
        });
    });

    //4.Projects
    const categoriesOfProject = document.querySelectorAll('.projects-navbar li');
    const projectCategories = document.querySelectorAll('.project-category');

    categoriesOfProject.forEach(category => {
        category.addEventListener('click', function () {
            // Remove 'active' class from all categories
            categoriesOfProject.forEach(cat => cat.classList.remove('active'));

            // Add 'active' class to the clicked category
            this.classList.add('active');

            // Hide all project categories
            projectCategories.forEach(category => {
                category.classList.remove('active');
            });

            // Show the selected project category
            const selectedProjectCategory = document.querySelector(`.${this.dataset.category}`);
            selectedProjectCategory.classList.add('active');
        });
    });

    //5.Time and date
    updateTimeAndDate();

    // Update time and date every second
    setInterval(updateTimeAndDate, 1000);

    //6.Quote
    updateQuote();

    // Update quote every day (86400000 milliseconds = 24 hours)
    setInterval(updateQuote, 86400000);
});

function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for fixed navbar height
        behavior: 'smooth'
    });
}

function updateTimeAndDate() {
    const timeDisplay = document.getElementById('time-display');
    const dateDisplay = document.getElementById('date-display');

    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);

    const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateFormatOptions);

    timeDisplay.textContent = timeString;
    dateDisplay.textContent = dateString;
}

function updateQuote() {
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "Learn the rules like a pro, so you can break them like an artist.", author: "Pablo Picasso" },
        { text: "Code like an artist.", author: "Famous Coder" },
        // Add more quotes as needed
    ];

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

    // Select a quote based on the day of the year
    const selectedQuote = quotes[dayOfYear % quotes.length];

    // Update the quote section
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteText.textContent = selectedQuote.text;
    quoteAuthor.textContent = selectedQuote.author;
}