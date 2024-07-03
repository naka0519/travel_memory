// js/script.js
document.addEventListener("DOMContentLoaded", function () {
    function showSection(id) {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetTab = link.getAttribute("data-tab");
            showSection(targetTab);
            history.pushState(null, '', `#${targetTab}`);
        });
    });

    // 初期表示
    const initialHash = window.location.hash.substring(1) || "about";
    showSection(initialHash);
});
