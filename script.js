
// NAVBAR LOGO ANIMATION AND BACK-TO-TOP BUTTON
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

function handleScroll() {
    const isScrolled = window.scrollY > 40;

    navbar.classList.toggle("scrolled", isScrolled);
    backToTop.classList.toggle("visible", isScrolled);
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

// BACK TO TOP
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// PROJECT CAROUSEL
const projectTrack = document.getElementById("projectTrack");
const scrollLeftButton = document.getElementById("scrollLeft");
const scrollRightButton = document.getElementById("scrollRight");

function getScrollDistance() {
    const firstCard = projectTrack.querySelector(".project-card");
    const styles = window.getComputedStyle(projectTrack);
    const gap = parseFloat(styles.columnGap) || 0;

    return firstCard
        ? firstCard.getBoundingClientRect().width + gap
        : projectTrack.clientWidth;
}

scrollLeftButton.addEventListener("click", () => {
    projectTrack.scrollBy({
        left: -getScrollDistance(),
        behavior: "smooth"
    });
});

scrollRightButton.addEventListener("click", () => {
    projectTrack.scrollBy({
        left: getScrollDistance(),
        behavior: "smooth"
    });
});

// DARK / LIGHT MODE — ICON ONLY
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    // Moon in light mode; sun in dark mode.
    themeIcon.textContent = isDark ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeToggle.setAttribute(
        "title",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeToggle.setAttribute("aria-pressed", String(isDark));
}

// Restore saved theme, defaulting to light mode.
let isDarkMode = false;

try {
    isDarkMode = localStorage.getItem("portfolio-theme") === "dark";
} catch (error) {
    // Theme switching still works if storage is unavailable.
}

applyTheme(isDarkMode);

themeToggle.addEventListener("click", () => {
    isDarkMode = !document.body.classList.contains("dark-mode");
    applyTheme(isDarkMode);

    try {
        localStorage.setItem(
            "portfolio-theme",
            isDarkMode ? "dark" : "light"
        );
    } catch (error) {
        // The selected theme remains active for this session.
    }
});
