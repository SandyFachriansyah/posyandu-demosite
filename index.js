// Scoll navbar
window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


// Count Up
document.addEventListener('DOMContentLoaded', function () {
    const countUpElements = document.querySelectorAll('.countup');

    function startCountUpAnimation() {
        countUpElements.forEach((element) => {
            const target = parseFloat(element.getAttribute('data-target'));
            let count = 0;

            const updateCount = () => {
                const speed = 100; // Adjust the speed of the countUp animation
                const increment = target / speed;

                if (count < target) {
                    count += increment;
                    if (element.textContent.includes('%')) {
                        element.textContent = `${count.toFixed(1)}%`;
                    } else {
                        element.textContent = Math.ceil(count);
                    }
                    requestAnimationFrame(updateCount);
                } else {
                    element.textContent = element.textContent.includes('%') ? `${target.toFixed(1)}%` : target;
                }
            };

            updateCount();
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        countUpElements.forEach((element) => {
            if (isElementInViewport(element) && !element.classList.contains('counted')) {
                startCountUpAnimation();
                element.classList.add('counted');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
});

const nav = document.querySelector('.nav__link',);
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');
const loginBtn = document.querySelector('.login');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
};

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);




// close nav menu on click
if(document.body.clientWidth < 1024){
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    })
}
nav.appendChild(loginBtn);
