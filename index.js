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

    //3
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

    //4
    const categoriesP = document.querySelectorAll('.projects-navbar li');
    const projectCategories = document.querySelectorAll('.project-category');

    categoriesP.forEach(category => {
        category.addEventListener('click', function () {
            // Remove 'active' class from all categories
            categoriesP.forEach(cat => cat.classList.remove('active'));

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
