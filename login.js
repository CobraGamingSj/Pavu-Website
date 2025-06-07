document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Simulating a simple login with hardcoded user details.
    const users = {
        "winepalace@gmail.com": { name: "winepalace", password: "password1", productPage: "winepalace" },
        "surya@gmail.com": { name: "surya", password: "password2", productPage: "surya" },
        "nandini@gmail.com": { name: "nandini", password: "password3", productPage: "nandini" },
        "durga@gmail.com": { name: "durga", password: "password3", productPage: "durga" },
    };

    // Check if the user exists and the password is correct
    if (users[email] && users[email].password === password) {
        window.location.href = `${users[email].productPage}.html`;  // Redirect to respective product page
    } else {
        alert("Invalid credentials, please try again.");
    }
});
