document.addEventListener("DOMContentLoaded", function () {
    function showMessage() {
        let message = document.getElementById("surpriseMessage");
        message.style.display = "block";
        message.classList.add("animate");
        
        // Updating message content with a longer heartfelt wish
        message.innerHTML = "🎂🎉 Happy Birthday, [Friend's Name]! 🎉🎂<br><br>"
            + "On this special day, I just want to remind you how amazing you are! "
            + "May your life be filled with happiness, love, and success. "
            + "You deserve all the best things in the world, and I hope this year brings "
            + "new opportunities, wonderful memories, and endless joy. Keep shining, "
            + "keep smiling, and keep being the incredible person you are. Wishing you "
            + "a fantastic birthday and a year ahead full of adventures and laughter! 🎁🎊";
        
        // Adding a fade-in effect with smooth transition
        message.style.opacity = 0;
        message.style.transition = "opacity 1.5s ease-in-out";
        setTimeout(() => {
            message.style.opacity = 1;
        }, 100);
        
        // Adding confetti effect with better spread
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
        
        // Adding bounce and rotate animation
        message.style.transform = "scale(0.5) rotate(-10deg)";
        message.style.transition = "transform 1s ease-in-out";
        setTimeout(() => {
            message.style.transform = "scale(1) rotate(0deg)";
        }, 100);
        
        // Adding pulsating glow effect
        setInterval(() => {
            message.style.textShadow = "0 0 15px #ff6699, 0 0 25px #ff3366";
            setTimeout(() => {
                message.style.textShadow = "none";
            }, 500);
        }, 1000);
        
        // Fireworks effect
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    confetti({
                        particleCount: 50,
                        spread: 150,
                        origin: { y: Math.random() }
                    });
                }, i * 500);
            }
        }, 1000);
        
        // Falling blue hearts animation
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "💙";
            heart.style.position = "fixed";
            heart.style.top = "-50px";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.fontSize = Math.random() * 30 + 20 + "px";
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            heart.style.animation = "falling 4s linear infinite";
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }
    
    // Timer setup to trigger message at a specific time
    function startCountdown(targetDate) {
        let countdown = setInterval(() => {
            let now = new Date().getTime();
            let timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                showMessage();
            }
        }, 1000);
    }
})
