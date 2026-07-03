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

async function getVisitorCount() {
    try {
        const response = await fetch("https://j8wje4q1n7.execute-api.us-east-1.amazonaws.com/prod/visitorcount");
        const data = await response.json();

        document.getElementById("visitor-count").textContent = data.count;
    } catch (error) {
        console.error("Visitor Counter Error:", error);
    }
}

getVisitorCount();