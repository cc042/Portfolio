document.addEventListener('DOMContentLoaded', () => {
    const showerButton = document.querySelector("#mycontent1");
    const hiderButton = document.querySelector("#mycontent2");
    const aboutAside = document.querySelector(".About");
    const aside = document.querySelector("aside");

    // Function to handle window resize
    function handleResize() {
        const width = window.innerWidth;

        if (width > 1250) {
            showerButton.style.display = 'none';
            hiderButton.style.display = 'none';
            aboutAside.style.display = 'inline';
            aside.style.height = "max-content"
        }

        else if (width <= 1250 && width > 580) {
            hiderButton.style.display = 'flex';
            showerButton.style.display = 'flex';
            aboutAside.style.display = 'none';
            aside.style.height = '169px';

            showerButton.addEventListener("click", () => {
                hiderButton.style.display = "flex"
                showerButton.style.display = "none"
                aside.style.height = '530px';
                aboutAside.style.display = 'inline';
            })
            hiderButton.addEventListener("click", () => {
                hiderButton.style.display = "none"
                showerButton.style.display = "flex"
                aside.style.height = '169px';
                aboutAside.style.display = 'none';
            })
        }

        else if (width <= 580 && width >= 400) {
            // Smaller screens
            showerButton.style.display = 'flex';
            hiderButton.style.display = 'flex';
            aboutAside.style.display = 'none';
            aside.style.height = '132px';

            showerButton.addEventListener("click", () => {
                hiderButton.style.display = "flex"
                showerButton.style.display = "none"
                aside.style.height = '490px';
                aboutAside.style.display = 'inline';
            })
            hiderButton.addEventListener("click", () => {
                hiderButton.style.display = "none"
                showerButton.style.display = "flex"
                aside.style.height = '132px';
                aboutAside.style.display = 'none';
            })
        }

        else if (width <= 400) {
            showerButton.style.display = 'flex';
            hiderButton.style.display = 'flex';
            aboutAside.style.display = 'none';
            aside.style.height = '150px';

            showerButton.addEventListener("click", () => {
                hiderButton.style.display = "flex"
                showerButton.style.display = "none"
                aside.style.height = '509px';
                aboutAside.style.display = 'inline';
            })
            hiderButton.addEventListener("click", () => {
                hiderButton.style.display = "none"
                showerButton.style.display = "flex"
                aside.style.height = '150px';
                aboutAside.style.display = 'none';
            })
        }
    }

    // Initialize on load
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
});
