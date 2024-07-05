document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const secondaryActionBtn = document.getElementById("secondaryActionBtn");

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    secondaryActionBtn.addEventListener("click", () => {
        alert("Secondary action triggered!");
    });
});
