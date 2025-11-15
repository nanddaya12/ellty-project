document.addEventListener("DOMContentLoaded", () => {
    
    const doneButton = document.querySelector(".done-button");
    const checkboxes = document.querySelectorAll(".hidden-checkbox");

    doneButton.addEventListener("click", () => {
        
        const selectedPages = [];
        
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const pageName = checkbox.getAttribute("data-page");
                selectedPages.push(pageName);
            }
        });

        if (selectedPages.length > 0) {
            console.log("Selected Pages:", selectedPages);
            alert("Selected pages logged to console: " + selectedPages.join(", "));
        } else {
            console.log("No pages selected.");
            alert("No pages were selected.");
        }
    });

});