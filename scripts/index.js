const sidebar = document.querySelector('.sidebar');
sidebar.onclick = () => {
        sidebar.classList.toggle('active');
}

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
                if (entry.isIntersecting) {
                        entry.target.classList.add("js-hidden-active");
                }
                else {
                        entry.target.classList.remove("js-hidden-active");
                }
        })
})

const Hidden = document.querySelectorAll(".js-hidden");
Hidden.forEach((element) => {
        observer.observe(element);
})

