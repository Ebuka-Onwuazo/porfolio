let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress"); // Select all progress elements

  progressBars.forEach((progressBar) => {
    const targetWidth = parseInt(progressBar.style.width); // Extract target width from the style attribute
    let currentWidth = 0; // Start animation at 0

    const progressInterval = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(progressInterval); // Stop animation when reaching the target
      } else {
        currentWidth++; // Increment width
        progressBar.style.width = currentWidth + "%"; // Update progress bar's width
      }
    }, 20); // Adjust animation speed (lower value = faster animation)
  });
});

function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };

    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Call the function immediately to set the initial value
updateDateTime();
