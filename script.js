// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // Get the "Done" button
    const doneButton = document.querySelector(".done-button");
    
    // Get all the checkboxes
    const checkboxes = document.querySelectorAll(".hidden-checkbox");

    // Add a click event listener to the "Done" button
    doneButton.addEventListener("click", () => {
        
        const selectedPages = [];
        
        // Loop through all checkboxes to see which ones are checked
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                // Get the page name from the 'data-page' attribute
                const pageName = checkbox.getAttribute("data-page");
                selectedPages.push(pageName);
            }
        });

        // Log the results to the console
        if (selectedPages.length > 0) {
            console.log("Selected Pages:", selectedPages);
            // You can also show an alert for easy testing
            alert("Selected pages: " + selectedPages.join(", "));
        } else {
            console.log("No pages selected.");
            alert("No pages were selected.");
        }
    });

});