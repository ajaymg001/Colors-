// document.addEventListener("DOMContentLoaded", function() {
//     // Smooth scrolling for navigation links
//     document.querySelectorAll("nav ul li a").forEach(anchor => {
//         anchor.addEventListener("click", function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             document.getElementById(targetId).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });

//     // Dynamic package highlights
//     const packages = [
//         "Limited Offer: 20% Off on Bali Tour!",
//         "Exclusive Paris Getaway - Book Now!",
//         "Adventure Trekking Special Discount!"
//     ];
    
//     const packageContainer = document.querySelector("#packages");
//     const offerElement = document.createElement("p");
//     offerElement.textContent = packages[Math.floor(Math.random() * packages.length)];
//     offerElement.style.color = "#ff6f61";
//     offerElement.style.fontWeight = "bold";
//     packageContainer.appendChild(offerElement);

//     // Button click event for booking
//     document.querySelector(".hero button").addEventListener("click", function() {
//         alert("Redirecting to packages page...");
//     });

//     // Booking Form Submission
//     const bookingForm = document.getElementById("bookingForm");
//     if (bookingForm) {
//         bookingForm.addEventListener("submit", function(e) {
//             e.preventDefault();
//             alert("Thank you for booking with us! We will contact you soon.");
//             bookingForm.reset();
//         });
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     // Handle "Book Now" button click
//     document.getElementById("bookNow").addEventListener("click", function () {
//         alert("Redirecting to booking section...");
//         document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
//     });

//     // Handle "View Details" button click for each package
//     document.querySelectorAll(".viewDetails").forEach(button => {
//         button.addEventListener("click", function () {
//             alert("More details coming soon!");
//         });
//     });

    // Form validation
    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let destination = document.getElementById("destination").value;
        
        if (name && email && destination) {
            alert("Thank you, " + name + "! Your booking request has been submitted.");
            this.reset();
        } else {
            alert("Please fill in all required fields.");
        }
    });
;
