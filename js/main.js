document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (!target) return;

        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        const targetPosition = target.offsetTop - navbarHeight - 15;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

    });

});