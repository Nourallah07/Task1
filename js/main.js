$("#mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
	utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});


var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            initialCountry: "auto",
            geoIpLookup: function(callback) {
                fetch('https://ipinfo.io/json')
                    .then(response => response.json())
                    .then(data => callback(data.country))
                    .catch(() => callback('us'));
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"

        });


// last section slider

const popOvers = [
        {
            id: 1,
            name: "Sarah Chen",
            title: "Lead Designer",
            image: "/placeholder.svg?height=400&width=400",
        },
        {
            id: 2,
            name: "Michael Ross",
            title: "Product Manager",
            image: "/placeholder.svg?height=400&width=400",
        },
        {
            id: 3,
            name: "Jenny Wilson",
            title: "Co-Founder, CEO",
            image: "/placeholder.svg?height=400&width=400",
        },
        {
            id: 4,
            name: "David Miller",
            title: "Tech Lead",
            image: "/placeholder.svg?height=400&width=400",
        },
        {
            id: 5,
            name: "Emma Parker",
            title: "Marketing Director",
            image: "/placeholder.svg?height=400&width=400",
        },
    ];

    let currentIndex = 0;

    const renderPopOvers = () => {
        testimonials.forEach((popOvers, index) => {
            const popOversDiv = document.getElementById(`popOvers{index + 1}`);
            popOversDiv.innerHTML = `
                <div class="image-container">
                    <img src="${popOvers.image}" alt="${popOvers.name}">
                </div>
                <h3>${popOvers.name}</h3>
                <p>${popOvers.title}</p>
            `;
            popOversDiv.classList.toggle('active', index === currentIndex);
        });
    };

    const showPrevious = () => {
        currentIndex = (currentIndex === 0) ? popOvers.length - 1 : currentIndex - 1;
        renderTestimonials();
    };

    const showNext = () => {
        currentIndex = (currentIndex === popOvers.length - 1) ? 0 : currentIndex + 1;
        renderPopOvers();
    };

    document.getElementById('prevBtn').addEventListener('click', showPrevious);
    document.getElementById('nextBtn').addEventListener('click', showNext);

    // Initial render
    renderPopOvers();



//modified
const testimonials = [
        {
            id: 1,
            name: "David Miller",
            title: "Tech Lead",
            image: "images/team4.png",
        },
        {
            id: 2,
            name: "Emma Parker",
            title: "Marketing Director",
            image: "images/team5.png",
        },
        {
            id: 3,
            name: "Sarah Chen",
            title: "Lead Designer",
            image: "images/team1.png",
        },
        {
            id: 4,
            name: "Michael Ross",
            title: "Product Manager",
            image: "images/team2.png",
        },
        {
            id: 5,
            name: "Jenny Wilson",
            title: "Co-Founder, CEO",
            image: "images/team3.png",
        },
    ];

    let currentIndex = 0;

    const renderTestimonials = () => {
        testimonials.forEach((testimonial, index) => {
            const testimonialDiv = document.getElementById(`${index === 0 ? 'fourthCircl' : index === 1 ? 'fifthCircl' : index === 2 ? 'firstCircl' : index === 3 ? 'secCircl' : 'thirdCircl'}`);
            testimonialDiv.classList.toggle('active', index === currentIndex);
        });
    };

    const showPrevious = () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        renderTestimonials();
    };

    const showNext = () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        renderTestimonials();
    };

    document.getElementById('prevBtn').addEventListener('click', showPrevious);
    document.getElementById('nextBtn').addEventListener('click', showNext);

    // Initial render
    renderTestimonials();